import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "babel-polyfill";
import store from "./store";
import App from "./App";

import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
