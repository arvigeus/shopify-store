import { useFetcher, useLocation, useRouteLoaderData } from '@remix-run/react'
import { CartForm } from '@shopify/hydrogen'
import { type CartBuyerIdentityInput } from '@shopify/hydrogen/storefront-api-types'
import clsx from 'clsx'
import { useCallback, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

import { Button } from '~/components/Button'
import { IconCheck } from '~/components/Icon'
import { Heading } from '~/components/Text'
import { type Localizations, type Locale } from '~/lib/type'
import { DEFAULT_LOCALE } from '~/lib/utils'
import { type RootLoader } from '~/root'

export function CountrySelector() {
	const fetcher = useFetcher()
	const closeRef = useRef<HTMLDetailsElement>(null)
	const rootData = useRouteLoaderData<RootLoader>('root')
	const selectedLocale = rootData?.selectedLocale ?? DEFAULT_LOCALE
	const { pathname, search } = useLocation()
	const pathWithoutLocale = `${pathname.replace(
		selectedLocale.pathPrefix,
		'',
	)}${search}`

	const countries = (fetcher.data ?? {}) as Localizations
	const defaultLocale = countries?.['default']
	const defaultLocalePrefix = defaultLocale
		? `${defaultLocale?.language}-${defaultLocale?.country}`
		: ''

	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})

	const observerRef = useRef(null)
	useEffect(() => {
		ref(observerRef.current)
	}, [ref, observerRef])

	// Get available countries list when in view
	useEffect(() => {
		if (!inView || fetcher.data || fetcher.state === 'loading') return
		fetcher.load('/api/countries')
	}, [inView, fetcher])

	const closeDropdown = useCallback(() => {
		closeRef.current?.removeAttribute('open')
	}, [])

	return (
		<section
			ref={observerRef}
			className="grid w-full gap-4"
			onMouseLeave={closeDropdown}
		>
			<Heading size="lead" className="cursor-default" as="h3">
				Country
			</Heading>
			<div className="relative">
				<details
					className="open:round-b-none absolute w-full overflow-clip rounded border border-contrast/30 dark:border-white"
					ref={closeRef}
				>
					<summary className="flex w-full cursor-pointer items-center justify-between px-4 py-3">
						{selectedLocale.label}
					</summary>
					<div className="max-h-36 w-full overflow-auto border-t border-contrast/30 bg-contrast/30 dark:border-white">
						{countries &&
							Object.keys(countries).map((countryPath) => {
								const countryLocale = countries[countryPath]
								const isSelected =
									countryLocale.language === selectedLocale.language &&
									countryLocale.country === selectedLocale.country

								const countryUrlPath = getCountryUrlPath({
									countryLocale,
									defaultLocalePrefix,
									pathWithoutLocale,
								})

								return (
									<Country
										key={countryPath}
										closeDropdown={closeDropdown}
										countryUrlPath={countryUrlPath}
										isSelected={isSelected}
										countryLocale={countryLocale}
									/>
								)
							})}
					</div>
				</details>
			</div>
		</section>
	)
}

function Country({
	closeDropdown,
	countryLocale,
	countryUrlPath,
	isSelected,
}: {
	closeDropdown: () => void
	countryLocale: Locale
	countryUrlPath: string
	isSelected: boolean
}) {
	return (
		<ChangeLocaleForm
			key={countryLocale.country}
			redirectTo={countryUrlPath}
			buyerIdentity={{
				countryCode: countryLocale.country,
			}}
		>
			<Button
				className={clsx([
					'text-contrast dark:text-primary',
					'flex w-full justify-start rounded bg-primary p-2 transition dark:bg-contrast',
					'cursor-pointer items-center px-4 py-2 text-left',
				])}
				type="submit"
				variant="primary"
				onClick={closeDropdown}
			>
				{countryLocale.label}
				{isSelected ? (
					<span className="ml-2">
						<IconCheck />
					</span>
				) : null}
			</Button>
		</ChangeLocaleForm>
	)
}

function ChangeLocaleForm({
	children,
	buyerIdentity,
	redirectTo,
}: {
	children: React.ReactNode
	buyerIdentity: CartBuyerIdentityInput
	redirectTo: string
}) {
	return (
		<CartForm
			route="/cart"
			action={CartForm.ACTIONS.BuyerIdentityUpdate}
			inputs={{
				buyerIdentity,
			}}
		>
			<>
				<input type="hidden" name="redirectTo" value={redirectTo} />
				{children}
			</>
		</CartForm>
	)
}

function getCountryUrlPath({
	countryLocale,
	defaultLocalePrefix,
	pathWithoutLocale,
}: {
	countryLocale: Locale
	pathWithoutLocale: string
	defaultLocalePrefix: string
}) {
	let countryPrefixPath = ''
	const countryLocalePrefix = `${countryLocale.language}-${countryLocale.country}`

	if (countryLocalePrefix !== defaultLocalePrefix) {
		countryPrefixPath = `/${countryLocalePrefix.toLowerCase()}`
	}
	return `${countryPrefixPath}${pathWithoutLocale}`
}
