const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        open: true,
        compress: true,
        port: 3000,
    },
    output: {
        publicPath: '/',
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'img/[name][ext]'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }]
    }
});