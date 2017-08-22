import path from "path";

export default {
    test: /\.css$/,
    include: path.resolve(__dirname, "../../src"),
    use: [
        {
            loader: "style-loader"
        },
        {
            loader: "css-loader",
            options: {
                modules: true
            }
        },
        {
            loader: "sass-loader"
        }
    ]
};
