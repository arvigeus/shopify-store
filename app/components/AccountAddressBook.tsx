import { Form } from '@remix-run/react'
import type { CustomerAddress } from '@shopify/hydrogen/customer-account-api-types'

import type { CustomerDetailsFragment } from 'customer-accountapi.generated'
import { Button } from '~/components/Button'
import { Text } from '~/components/Text'
import { Link } from '~/components/Link'

export function AccountAddressBook({
	customer,
	addresses,
}: {
	customer: CustomerDetailsFragment
	addresses: CustomerAddress[]
}) {
	return (
		<>
			<div className="grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12">
				<h3 className="text-lead font-bold">Address Book</h3>
				<div>
					{!addresses?.length && (
						<Text className="mb-1" width="narrow" as="p" size="copy">
							You haven&apos;t saved any addresses yet.
						</Text>
					)}
					<div className="w-48">
						<Button
							to="address/add"
							className="mb-6 mt-2 w-full text-sm"
							variant="secondary"
						>
							Add an Address
						</Button>
					</div>
					{Boolean(addresses?.length) && (
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
							{customer.defaultAddress && (
								<Address address={customer.defaultAddress} defaultAddress />
							)}
							{addresses
								.filter((address) => address.id !== customer.defaultAddress?.id)
								.map((address) => (
									<Address key={address.id} address={address} />
								))}
						</div>
					)}
				</div>
			</div>
		</>
	)
}

function Address({
	address,
	defaultAddress,
}: {
	address: CustomerAddress
	defaultAddress?: boolean
}) {
	return (
		<div className="flex flex-col rounded border border-gray-200 p-6 lg:p-8">
			{defaultAddress && (
				<div className="mb-3 flex flex-row">
					<span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary/50">
						Default
					</span>
				</div>
			)}
			<ul className="flex-1 flex-row">
				{(address.firstName || address.lastName) && (
					<li>
						{'' +
							(address.firstName && address.firstName + ' ') +
							address?.lastName}
					</li>
				)}
				{address.formatted &&
					address.formatted.map((line: string) => <li key={line}>{line}</li>)}
			</ul>

			<div className="mt-6 flex flex-row items-baseline font-medium">
				<Link
					to={`/account/address/${encodeURIComponent(address.id)}`}
					className="text-left text-sm underline"
					prefetch="intent"
				>
					Edit
				</Link>
				<Form action="address/delete" method="delete">
					<input type="hidden" name="addressId" value={address.id} />
					<button className="ml-6 text-left text-sm text-primary/50">
						Remove
					</button>
				</Form>
			</div>
		</div>
	)
}
