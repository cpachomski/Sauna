const path = require("path");
const HTMLWebpackPluginConfig = require("./plugins/html-webpack-plugin");
console.log(HTMLWebpackPluginConfig);

const CleanWebpackPlugin = require("clean-webpack-plugin");
console.log(path.resolve(__dirname, "../dist"));
module.exports = {
    entry: {
        index: path.resolve(__dirname, "../src/index.js"),
        another: path.resolve(__dirname, "../src/another-module.js")
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "../dist")
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, "../dist")]),
        HTMLWebpackPluginConfig
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "../src"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            }
        ]
    }
};
