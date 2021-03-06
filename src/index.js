/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./css/weather-icons.min.css";
import App from "./App";
import store from "./store";
import './styles/main.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
