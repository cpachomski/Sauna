import "react-hot-loader/patch";
import React from "react";
import ReactDOM from "react-dom";
import Welcome from "components/welcome";

const render = Component => {
    ReactDOM.render(
		<Component />,
        document.getElementById("sauna")
    );
};

render(Welcome);

if (module.hot) {
    module.hot.accept("./components/Welcome", () => {
        render(Welcome);
    });
}
