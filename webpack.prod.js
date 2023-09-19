const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		assetModuleFilename: "images/[name][ext]",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
							plugins: [
								[
									"@babel/plugin-syntax-import-attributes",
									{ deprecatedAssertSyntax: true },
								],
							],
						},
					},
				],
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			`...`,
			new TerserPlugin({
				terserOptions: {
					ecma: undefined,
					parse: {},
					compress: {},
					mangle: true,
					module: false,
					output: null,
					format: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false,
				},
			}),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.sharpMinify,
				},
			}),
		],
	},
});
