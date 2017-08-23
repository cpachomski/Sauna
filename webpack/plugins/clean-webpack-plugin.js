import path from "path";
import CleanWebpackPlugin from "clean-webpack-plugin";

const CleanWebpackPluginConfig = new CleanWebpackPlugin(
    [path.resolve(__dirname, "../../dist")],
    { allowExternal: true }
);

export default CleanWebpackPluginConfig;
