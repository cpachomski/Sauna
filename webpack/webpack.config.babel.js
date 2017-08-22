import path from "path";
import entry from "./entry";
import rules from "./rules";
import plugins from "./plugins";
import resolve from "./resolve";

module.exports = {
    entry,
    devtool: "inline-source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    plugins,
    resolve,
    module: {
        rules
    }
};
