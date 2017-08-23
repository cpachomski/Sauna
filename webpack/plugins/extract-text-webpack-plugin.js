import ExtractTextPlugin from "extract-text-webpack-plugin";

const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: "css/[contenthash].css"
});

export default ExtractTextPluginConfig;
