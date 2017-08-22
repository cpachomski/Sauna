import path from "path";
import rules from "./rules";
import plugins from "./plugins";
import devServer from "./dev-server";

module.exports = {
    entry: {
        index: path.resolve(__dirname, "../src/index.js"),
        another: path.resolve(__dirname, "../src/another-module.js")
    },
    devtool: "inline-source-map",
    devServer,
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    plugins,
    module: {
        rules
    }
};
