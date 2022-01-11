import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
