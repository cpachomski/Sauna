import path from "path";
import autoprefixer from "autoprefixer";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
    test: /\.css$/,
    include: path.resolve(__dirname, "../../src"),
    use: ExtractTextPlugin.extract({
        fallback: [
            {
                loader: "style-loader"
            }
        ],
        use: [
            {
                loader: "css-loader",
                options: {
                    modules: true,
                    localIdentName: "[name]__[local]--[hash:base64:5]"
                }
            },
            {
                loader: "sass-loader"
            }
        ],
        publicPath: path.resolve(__dirname, "../../dist")
    })
};
