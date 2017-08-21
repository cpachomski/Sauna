const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    title: "Universe",
    template: path.resolve(__dirname, "../../src/templates/index.ejs"),
    rootId: "universe",
    inject: "body"
});

module.exports = HTMLWebpackPluginConfig;
