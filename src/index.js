import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";

import rootReducer from "./redux/reducers";

const history = createBrowserHistory();

let store = null;

if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, applyMiddleware(logger, thunk));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
