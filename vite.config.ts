import { vitePlugin as remix } from '@remix-run/dev'
import { hydrogen } from '@shopify/hydrogen/vite'
import { oxygen } from '@shopify/mini-oxygen/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	server: {
		open: true,
	},
	plugins: [
		hydrogen(),
		oxygen(),
		remix({
			ignoredRouteFiles: ['**/*.css'],
			presets: [hydrogen.preset()],
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
				v3_singleFetch: true,
				v3_lazyRouteDiscovery: true,
			},
		}),
		tsconfigPaths(),
	],
	ssr: {
		optimizeDeps: {
			include: ['typographic-base'],
		},
	},
	optimizeDeps: {
		include: [
			'clsx',
			'@headlessui/react',
			'typographic-base',
			'react-intersection-observer',
			'react-use/esm/useScroll',
			'react-use/esm/useDebounce',
			'react-use/esm/useWindowScroll',
		],
	},
	build: {
		// Allow a strict Content-Security-Policy
		// withtout inlining assets as base64:
		assetsInlineLimit: 0,
	},
})
