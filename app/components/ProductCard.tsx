import { flattenConnection, Image, Money, useMoney } from '@shopify/hydrogen'
import {
	type MoneyV2,
	type Product,
} from '@shopify/hydrogen/storefront-api-types'
import clsx from 'clsx'

import { type ProductCardFragment } from 'storefrontapi.generated'
import { AddToCartButton } from '~/components/AddToCartButton'
import { Button } from '~/components/Button'
import { Link } from '~/components/Link'
import { Text } from '~/components/Text'
import { getProductPlaceholder } from '~/lib/placeholders'
import { isDiscounted, isNewArrival } from '~/lib/utils'

export function ProductCard({
	product,
	label,
	className,
	loading,
	onClick,
	quickAdd,
}: {
	product: ProductCardFragment
	label?: string
	className?: string
	loading?: HTMLImageElement['loading']
	onClick?: () => void
	quickAdd?: boolean
}) {
	let cardLabel

	const cardProduct: Product = product?.variants
		? (product as Product)
		: getProductPlaceholder()
	if (!cardProduct?.variants?.nodes?.length) return null

	const firstVariant = flattenConnection(cardProduct.variants)[0]

	if (!firstVariant) return null
	const { image, price, compareAtPrice } = firstVariant

	if (label) {
		cardLabel = label
	} else if (isDiscounted(price as MoneyV2, compareAtPrice as MoneyV2)) {
		cardLabel = 'Sale'
	} else if (isNewArrival(product.publishedAt)) {
		cardLabel = 'New'
	}

	return (
		<div className="flex flex-col gap-2">
			<Link
				onClick={onClick}
				to={`/products/${product.handle}`}
				prefetch="viewport"
			>
				<div className={clsx('grid gap-4', className)}>
					<div className="card-image aspect-[4/5] bg-primary/5">
						{image && (
							<Image
								className="fadeIn w-full object-cover"
								sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
								aspectRatio="4/5"
								data={image}
								alt={image.altText || `Picture of ${product.title}`}
								loading={loading}
							/>
						)}
						<Text
							as="label"
							size="fine"
							className="absolute right-0 top-0 m-4 text-right text-notice"
						>
							{cardLabel}
						</Text>
					</div>
					<div className="grid gap-1">
						<Text
							className="w-full overflow-hidden text-ellipsis whitespace-nowrap"
							as="h3"
						>
							{product.title}
						</Text>
						<div className="flex gap-4">
							<Text className="flex gap-4">
								<Money withoutTrailingZeros data={price!} />
								{isDiscounted(price as MoneyV2, compareAtPrice as MoneyV2) && (
									<CompareAtPrice
										className={'opacity-50'}
										data={compareAtPrice as MoneyV2}
									/>
								)}
							</Text>
						</div>
					</div>
				</div>
			</Link>
			{quickAdd && firstVariant.availableForSale && (
				<AddToCartButton
					lines={[
						{
							quantity: 1,
							merchandiseId: firstVariant.id,
						},
					]}
					variant="secondary"
					className="mt-2"
				>
					<Text as="span" className="flex items-center justify-center gap-2">
						Add to Cart
					</Text>
				</AddToCartButton>
			)}
			{quickAdd && !firstVariant.availableForSale && (
				<Button variant="secondary" className="mt-2" disabled>
					<Text as="span" className="flex items-center justify-center gap-2">
						Sold out
					</Text>
				</Button>
			)}
		</div>
	)
}

function CompareAtPrice({
	data,
	className,
}: {
	data: MoneyV2
	className?: string
}) {
	const { currencyNarrowSymbol, withoutTrailingZerosAndCurrency } =
		useMoney(data)

	const styles = clsx('strike', className)

	return (
		<span className={styles}>
			{currencyNarrowSymbol}
			{withoutTrailingZerosAndCurrency}
		</span>
	)
}
