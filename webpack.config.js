const webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'dist');
const mainPath = path.resolve(__dirname, 'src', 'index.js');


const config = {
	// make sure errors in the console map to correct file and line number
	devtool: 'cheap-module-source-map',
	entry: [
		// script refreshing browser on non-hot updates
		// 'webpack-dev-server/client?http://localhost:8080',
		
		// for hot style updates
		// 'webpack/hot/only-dev-server',
		mainPath
	],
	output: {
		path: buildPath,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: [nodeModulesPath],
				loader: 'react-hot!babel'
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.svg$/,
				loader: 'file'
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './dist',
		hot: true
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
      	'NODE_ENV': JSON.stringify('production')
    	}
		})
	]
};

module.exports = config;