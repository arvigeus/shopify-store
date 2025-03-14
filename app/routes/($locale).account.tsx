import {
	Await,
	Form,
	Outlet,
	useLoaderData,
	useMatches,
	useOutlet,
} from '@remix-run/react'
import { flattenConnection } from '@shopify/hydrogen'
import { defer, type LoaderFunctionArgs } from '@shopify/remix-oxygen'

import {
	type CustomerDetailsFragment,
	type OrderCardFragment,
} from 'customer-accountapi.generated'
import { Suspense } from 'react'

import { doLogout } from './($locale).account_.logout'
import {
	getFeaturedData,
	type FeaturedData,
} from './($locale).featured-products'
import { AccountAddressBook } from '~/components/AccountAddressBook'
import { AccountDetails } from '~/components/AccountDetails'
import { Button } from '~/components/Button'
import { FeaturedCollections } from '~/components/FeaturedCollections'
import { Modal } from '~/components/Modal'
import { OrderCard } from '~/components/OrderCard'
import { ProductSwimlane } from '~/components/ProductSwimlane'
import { PageHeader, Text } from '~/components/Text'
import { CACHE_NONE, routeHeaders } from '~/data/cache'
import { CUSTOMER_DETAILS_QUERY } from '~/graphql/customer-account/CustomerDetailsQuery'
import { usePrefixPathWithLocale } from '~/lib/utils'

export const headers = routeHeaders

export async function loader({ request, context, params }: LoaderFunctionArgs) {
	const { data, errors } = await context.customerAccount.query(
		CUSTOMER_DETAILS_QUERY,
	)

	/**
	 * If the customer failed to load, we assume their access token is invalid.
	 */
	if (errors?.length || !data?.customer) {
		throw await doLogout(context)
	}

	const customer = data?.customer

	const heading = customer
		? customer.firstName
			? `Welcome, ${customer.firstName}.`
			: `Welcome to your account.`
		: 'Account Details'

	return defer(
		{
			customer,
			heading,
			featuredDataPromise: getFeaturedData(context.storefront),
		},
		{
			headers: {
				'Cache-Control': CACHE_NONE,
			},
		},
	)
}

export default function Authenticated() {
	const data = useLoaderData<typeof loader>()
	const outlet = useOutlet()
	const matches = useMatches()

	// routes that export handle { renderInModal: true }
	const renderOutletInModal = matches.some((match) => {
		const handle = match?.handle as { renderInModal?: boolean }
		return handle?.renderInModal
	})

	if (outlet) {
		if (renderOutletInModal) {
			return (
				<>
					<Modal cancelLink="/account">
						<Outlet context={{ customer: data.customer }} />
					</Modal>
					<Account {...data} />
				</>
			)
		} else {
			return <Outlet context={{ customer: data.customer }} />
		}
	}

	return <Account {...data} />
}

interface AccountType {
	customer: CustomerDetailsFragment
	featuredDataPromise: Promise<FeaturedData>
	heading: string
}

function Account({ customer, heading, featuredDataPromise }: AccountType) {
	const orders = flattenConnection(customer.orders)
	const addresses = flattenConnection(customer.addresses)

	return (
		<>
			<PageHeader heading={heading}>
				<Form method="post" action={usePrefixPathWithLocale('/account/logout')}>
					<button type="submit" className="text-primary/50">
						Sign out
					</button>
				</Form>
			</PageHeader>
			{orders && <AccountOrderHistory orders={orders} />}
			<AccountDetails customer={customer} />
			<AccountAddressBook addresses={addresses} customer={customer} />
			{!orders.length && (
				<Suspense>
					<Await
						resolve={featuredDataPromise}
						errorElement="There was a problem loading featured products."
					>
						{(data) => (
							<>
								<FeaturedCollections
									title="Popular Collections"
									collections={data.featuredCollections}
								/>
								<ProductSwimlane products={data.featuredProducts} />
							</>
						)}
					</Await>
				</Suspense>
			)}
		</>
	)
}

type OrderCardsProps = {
	orders: OrderCardFragment[]
}

function AccountOrderHistory({ orders }: OrderCardsProps) {
	return (
		<div className="mt-6">
			<div className="grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12">
				<h2 className="text-lead font-bold">Order History</h2>
				{orders?.length ? <Orders orders={orders} /> : <EmptyOrders />}
			</div>
		</div>
	)
}

function EmptyOrders() {
	return (
		<div>
			<Text className="mb-1" size="fine" width="narrow" as="p">
				You haven&apos;t placed any orders yet.
			</Text>
			<div className="w-48">
				<Button
					className="mt-2 w-full text-sm"
					variant="secondary"
					to={usePrefixPathWithLocale('/')}
				>
					Start Shopping
				</Button>
			</div>
		</div>
	)
}

function Orders({ orders }: OrderCardsProps) {
	return (
		<ul className="false grid grid-flow-row grid-cols-1 gap-2 gap-y-6 sm:grid-cols-3 md:gap-4 lg:gap-6">
			{orders.map((order) => (
				<OrderCard order={order} key={order.id} />
			))}
		</ul>
	)
}
