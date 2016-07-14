const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'dist');
const mainPath = path.resolve(__dirname, 'src', 'index.js');


const config = {
	// make sure errors in the console map to correct file and line number
	devtool: 'eval',
	entry: [
		// script refreshing browser on non-hot updates
		'webpack-dev-server/client?http://localhost:8080',
		
		// for hot style updates
		'webpack/hot/only-dev-server',
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
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('style.css')
	]
};

module.exports = config;