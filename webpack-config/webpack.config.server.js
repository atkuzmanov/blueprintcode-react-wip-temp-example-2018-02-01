const path          = require("path");
const fs            = require("fs");
const nodeExternals = require("webpack-node-externals");
const webpack       = require("webpack");
const entryFile = "../src/server.js";
const outputPath = path.resolve(__dirname, "../dist/server");

module.exports = {
	target:  "node",
	cache:   false,
	context: __dirname,
	debug:   false,
	devtool: "source-map",
	entry:   entryFile,
	output:  {
		path:          outputPath,
		filename:      "bundle.js"
	},
	plugins: [
		
	],
	module:  {
		loaders: [
			{test: /\.json$/, loaders: ["json"]},
			{test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/, loaders: ["file?context=static&name=/[path][name].[ext]"], exclude: /node_modules/},
			{test: /\.js$/, loaders: ["babel?presets[]=es2015&presets[]=stage-0&presets[]=react"], exclude: /node_modules/}
		],
		postLoaders: [
		],
		noParse: /\.min\.js/
	},
	externals: [nodeExternals({
		whitelist: ["webpack/hot/poll?1000"]
	})],
	resolve: {

		extensions: ["", ".json", ".js"]
	},
	node:    {
		__dirname: true,
		fs:        "empty"
	}
};
