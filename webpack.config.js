const argv = require('yargs').argv;
const webpackConfig = require('./build');

module.exports = env => {
	let config = {};
	console.log(env);
	if (env.NODE_ENV === 'dev') {
		config = webpackConfig.devConfig;
	}
	if (env.NODE_ENV === 'prod') {
		config = webpackConfig.prodConfig;
	}
	return Object.assign({}, config);
}