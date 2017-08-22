import path from "path";

export default {
    contentBase: path.resolve(__dirname, "../../dist"),
    hot: true,
    port: 3030,
    historyApiFallback: true
};
