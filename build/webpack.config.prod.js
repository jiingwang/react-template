const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const baseConfig = require("./webpack.config.base.js");
const config = require("./config");

const prodConfig = Object.assign({}, baseConfig, {
	plugins: [
		new WebpackMd5Hash(),
		new UglifyJsPlugin({
			cache: true,
			parallel: true,
		}),
		new HtmlWebpackPlugin({
			title: config.tilte,
			inject: true,
			filename: "../index.html",
			template: "index-template.html"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		})
	]
});


module.exports = prodConfig;