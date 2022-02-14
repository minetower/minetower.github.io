import proxy from 'http2-proxy'

const defineRoute = (path, port) => ({
	src: `/${path}/.*`,
	dest: (req, res) => {
		req.url = req.url.replace(new RegExp(`^/${path}`), '')

		return proxy.web(req, res, {
			hostname: 'localhost',
			port: port,
		})
	},
})

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	alias: {
		src: './src',
	},
	mount: {
		public: {
			url: '/',
			static: true,
			resolve: false,
		},
		src: '/dist',
	},
	plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-postcss',
		'@snowpack/plugin-dotenv',
	],
	routes: [
		defineRoute('assets', 8082),
		/* Enable an SPA Fallback in development: */
		// { match: 'routes', src: '.*', dest: '/index.html' },
	],
	optimize: {
		// bundle: true,
		minify: true,
	},
	devOptions: {
		open: 'none',
	},
	buildOptions: {
		htmlFragments: true,
		// baseUrl: '/',
		metaUrlPath: 'snowpack',
	},
}
