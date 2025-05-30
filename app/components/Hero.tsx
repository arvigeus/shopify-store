import { MediaFile } from '@shopify/hydrogen'
import {
	type MediaImage,
	type Media,
	type Video as MediaVideo,
} from '@shopify/hydrogen/storefront-api-types'
import clsx from 'clsx'

import { type CollectionContentFragment } from 'storefrontapi.generated'
import { Link } from '~/components/Link'
import { Heading, Text } from '~/components/Text'

type HeroProps = CollectionContentFragment & {
	height?: 'full'
	top?: boolean
	loading?: HTMLImageElement['loading']
}

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function Hero({
	byline,
	cta,
	handle,
	heading,
	height,
	loading,
	spread,
	spreadSecondary,
	top,
}: HeroProps) {
	return (
		<Link to={`/collections/${handle}`} prefetch="viewport">
			<section
				className={clsx(
					'relative flex w-full flex-col justify-end',
					top && '-mt-nav',
					height === 'full'
						? 'h-screen'
						: 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]',
				)}
			>
				<div className="pointer-events-none absolute inset-0 -z-10 grid flex-grow auto-cols-fr grid-flow-col content-stretch overflow-clip">
					{spread?.reference && (
						<div>
							<SpreadMedia
								sizes={
									spreadSecondary?.reference
										? '(min-width: 48em) 50vw, 100vw'
										: '100vw'
								}
								data={spread.reference as Media}
								loading={loading}
							/>
						</div>
					)}
					{spreadSecondary?.reference && (
						<div className="hidden md:block">
							<SpreadMedia
								sizes="50vw"
								data={spreadSecondary.reference as Media}
								loading={loading}
							/>
						</div>
					)}
				</div>
				<div className="flex flex-col items-baseline justify-between gap-4 bg-gradient-to-t from-primary/60 px-6 py-8 text-contrast sm:px-8 md:px-12 dark:from-contrast/60 dark:text-primary">
					{heading?.value && (
						<Heading format as="h2" size="display" className="max-w-md">
							{heading.value}
						</Heading>
					)}
					{byline?.value && (
						<Text format width="narrow" as="p" size="lead">
							{byline.value}
						</Text>
					)}
					{cta?.value && <Text size="lead">{cta.value}</Text>}
				</div>
			</section>
		</Link>
	)
}

type SpreadMediaProps = {
	data: Media | MediaImage | MediaVideo
	loading?: HTMLImageElement['loading']
	sizes: string
}

function SpreadMedia({ data, loading, sizes }: SpreadMediaProps) {
	return (
		<MediaFile
			data={data}
			className="block h-full w-full object-cover"
			mediaOptions={{
				video: {
					controls: false,
					muted: true,
					loop: true,
					playsInline: true,
					autoPlay: true,
					previewImageOptions: { src: data.previewImage?.url ?? '' },
				},
				image: {
					loading,
					crop: 'center',
					sizes,
					alt: data.alt || '',
				},
			}}
		/>
	)
}
