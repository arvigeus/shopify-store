import { useLoaderData } from '@remix-run/react'
import { getSeoMeta, Image } from '@shopify/hydrogen'
import {
	type MetaArgs,
	type LinksFunction,
	type LoaderFunctionArgs,
} from '@shopify/remix-oxygen'
import invariant from 'tiny-invariant'

import styles from '../styles/custom-font.css?url'
import { PageHeader, Section } from '~/components/Text'
import { routeHeaders } from '~/data/cache'
import { seoPayload } from '~/lib/seo.server'

const BLOG_HANDLE = 'journal'

export const headers = routeHeaders

export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

export async function loader({ request, params, context }: LoaderFunctionArgs) {
	const { language, country } = context.storefront.i18n

	invariant(params.journalHandle, 'Missing journal handle')

	const { blog } = await context.storefront.query(ARTICLE_QUERY, {
		variables: {
			blogHandle: BLOG_HANDLE,
			articleHandle: params.journalHandle,
			language,
		},
	})

	if (!blog?.articleByHandle) {
		throw new Response(null, { status: 404 })
	}

	const article = blog.articleByHandle

	const formattedDate = new Intl.DateTimeFormat(`${language}-${country}`, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(new Date(article?.publishedAt!))

	const seo = seoPayload.article({ article, url: request.url })

	return { article, formattedDate, seo }
}

export const meta = ({ matches }: MetaArgs<typeof loader>) => {
	return getSeoMeta(...matches.map((match) => (match.data as any).seo))
}

export default function Article() {
	const { article, formattedDate } = useLoaderData<typeof loader>()

	const { title, image, contentHtml, author } = article

	return (
		<>
			<PageHeader heading={title} variant="blogPost">
				<span>
					{formattedDate} &middot; {author?.name}
				</span>
			</PageHeader>
			<Section as="article" padding="x">
				{image && (
					<Image
						data={image}
						className="mx-auto mt-8 w-full max-w-7xl md:mt-16"
						sizes="90vw"
						loading="eager"
					/>
				)}
				<div
					dangerouslySetInnerHTML={{ __html: contentHtml }}
					className="article"
				/>
			</Section>
		</>
	)
}

const ARTICLE_QUERY = `#graphql
  query ArticleDetails(
    $language: LanguageCode
    $blogHandle: String!
    $articleHandle: String!
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        title
        contentHtml
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        seo {
          description
          title
        }
      }
    }
  }
`
