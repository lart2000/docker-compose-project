//only is add if in next.config.js exist postcssloader :)
module.exports = {
	plugins: [
		require("postcss-easy-import")({ prefix: "_" }),
		require("autoprefixer")({})
	]
};