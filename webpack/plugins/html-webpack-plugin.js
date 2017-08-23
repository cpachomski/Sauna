const path = require("path");
import HTMLWebpackPlugin from "html-webpack-plugin";

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    title: "Sauna",
    template: path.resolve(__dirname, "../../src/templates/index.ejs"),
    rootId: "sauna",
    inject: "body",
    filename: path.resolve(__dirname, "../../dist/index.html")
});

export default HTMLWebpackPluginConfig;
