const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }  ,
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource'
            }          
        ]
    }
}