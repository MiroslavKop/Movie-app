const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.bundle.js",
        assetModuleFilename: "assets/[name][ext]",
    },
    devServer: {
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "main.bundle.css",
        }),
    ],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
