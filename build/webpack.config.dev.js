const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");
const config = require("./config");

const config = Object.assign({}, baseConfig, {
	devServer: {
		contentBase: path.resolve(__dirname, "../dist/"),
		compress: true,
		hot: true,
		port: config.port
	},
	plugins: {
		new HtmlWebpackPlugin({
			title: config.tilte,
			inject: true
		}),
		new webpack.HotModuleReplacementPlugin()
	}
});


module.exports = config;