import path from "path";

export default {
    test: /\.js$/,
    include: path.resolve(__dirname, "../../src"),
    use: {
        loader: "babel-loader",
        options: {
            presets: ["env", "react"]
        }
    }
};
