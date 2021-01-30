import dotenv from "dotenv";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/normalize.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

import "./i18n";
dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
