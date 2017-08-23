import path from "path";
import entry from "./entry";
import output from "./output";
import rules from "./rules";
import plugins from "./plugins";
import resolve from "./resolve";

module.exports = {
    entry,
    devtool: "inline-source-map",
    output,
    plugins,
    resolve,
    module: {
        rules
    }
};
