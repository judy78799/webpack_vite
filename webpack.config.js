const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry : "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                //use: ["style-loader", "css-loader"],
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.jpg$/,
                use: ["file-loader"],
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html',
    }),
    new MiniCssExtractPlugin({
        filename: "common.css",
    })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080,
    },
};