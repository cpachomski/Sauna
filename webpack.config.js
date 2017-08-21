const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        another: "./src/another-module.js"
    },
    devtool: "inline-source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HTMLWebpackPlugin({
            title: "Universe"
        })
    ]
};
