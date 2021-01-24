const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "bundle.[contenthash].js",
         publicPath: './',
        path: path.resolve(__dirname, "./dist"),                
       assetModuleFilename:'img/[name][ext]'
    },
  optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "style.[contenthash].css" })
    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }          
        ]
    }

});