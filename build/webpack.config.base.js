var path = require('path');

module.exports  = {
	entry: {
		vendor: ['react', 'react-router', 'react-redux'],
		app: './src/index.js'
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, '../dist/assets/'),
		publicPath: './assets/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'less-loader'
					}
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader'
					},
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			{

			}

		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {}
	}
}