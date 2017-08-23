import "react-hot-loader/patch";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Welcome from "components/welcome";

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById("sauna")
    );
};

render(Welcome);

if (module.hot) {
    module.hot.accept("./components/Welcome", () => {
        render(Welcome);
    });
}
