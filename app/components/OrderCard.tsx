import { flattenConnection, Image } from '@shopify/hydrogen'

import { type OrderCardFragment } from 'customer-accountapi.generated'
import { Link } from '~/components/Link'
import { Heading, Text } from '~/components/Text'
import { statusMessage } from '~/lib/utils'

export function OrderCard({ order }: { order: OrderCardFragment }) {
	if (!order?.id) return null

	const [legacyOrderId, key] = order!.id!.split('/').pop()!.split('?')
	const lineItems = flattenConnection(order?.lineItems)
	const fulfillmentStatus = flattenConnection(order?.fulfillments)[0]?.status
	const url = key
		? `/account/orders/${legacyOrderId}?${key}`
		: `/account/orders/${legacyOrderId}`

	return (
		<li className="grid rounded border text-center">
			<Link
				className="grid items-center gap-4 p-4 md:grid-cols-2 md:gap-6 md:p-6"
				to={url}
				prefetch="intent"
			>
				{lineItems[0].image && (
					<div className="card-image aspect-square bg-primary/5">
						<Image
							width={168}
							height={168}
							className="fadeIn cover w-full"
							alt={lineItems[0].image?.altText ?? 'Order image'}
							src={lineItems[0].image.url}
						/>
					</div>
				)}
				<div
					className={`flex-col justify-center text-left ${
						!lineItems[0].image && 'md:col-span-2'
					}`}
				>
					<Heading as="h3" format size="copy">
						{lineItems.length > 1
							? `${lineItems[0].title} +${lineItems.length - 1} more`
							: lineItems[0].title}
					</Heading>
					<dl className="grid-gap-1 grid">
						<dt className="sr-only">Order ID</dt>
						<dd>
							<Text size="fine" color="subtle">
								Order No. {order.number}
							</Text>
						</dd>
						<dt className="sr-only">Order Date</dt>
						<dd>
							<Text size="fine" color="subtle">
								{new Date(order.processedAt).toDateString()}
							</Text>
						</dd>
						{fulfillmentStatus && (
							<>
								<dt className="sr-only">Fulfillment Status</dt>
								<dd className="mt-2">
									<span
										className={`rounded-full px-3 py-1 text-xs font-medium ${
											fulfillmentStatus === 'SUCCESS'
												? 'bg-green-100 text-green-800'
												: 'bg-primary/5 text-primary/50'
										}`}
									>
										<Text size="fine">{statusMessage(fulfillmentStatus)}</Text>
									</span>
								</dd>
							</>
						)}
					</dl>
				</div>
			</Link>
			<div className="self-end border-t">
				<Link
					className="block w-full p-2 text-center"
					to={url}
					prefetch="intent"
				>
					<Text color="subtle" className="ml-3">
						View Details
					</Text>
				</Link>
			</div>
		</li>
	)
}

export const ORDER_CARD_FRAGMENT = `#graphql
  fragment OrderCard on Order {
    id
    orderNumber
    processedAt
    financialStatus
    fulfillmentStatus
    currentTotalPrice {
      amount
      currencyCode
    }
    lineItems(first: 2) {
      edges {
        node {
          variant {
            image {
              url
              altText
              height
              width
            }
          }
          title
        }
      }
    }
  }
`
