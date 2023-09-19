const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
				],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(png|svg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(svg)$/i,
				type: "asset",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
};
