import path from "path";

export default {
    modules: [
        path.resolve(__dirname, "../../src"),
        path.resolve(__dirname, "../../node_modules")
    ],
    alias: {
    	"react": "preact-compat",
    	"react-dom": "preact-compat"
    }
};
