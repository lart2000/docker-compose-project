const withSass = require('@zeit/next-sass'); //nested for add config
const withTypescript = require('@zeit/next-typescript')
// withTypescript()
module.exports = 
	withTypescript(
		withSass({
			// buildId,  id used as indentifier between builds
			// dev,  is mode DEV 
			// isServer,  is server or client , webpack twice 
			// defaultLoader ,    babel and hostSelftAAcpt
			webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
				// Perform customizations to webpack config
				// Important: return the modified config
				return config
			},
			webpackDevMiddleware: config => {
				// Perform customizations to webpack dev middleware config
				// Important: return the modified config
				return config
			}
		})
	);