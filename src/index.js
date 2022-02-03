import React from "react";
import { hydrate } from "react-dom";
import Router from "./router";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import Header from "./default/Header/Header";

const preloadedState = window.INITIAL_STATE;
delete window.INITIAL_STATE;

const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

hydrate(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector("#root")
);
