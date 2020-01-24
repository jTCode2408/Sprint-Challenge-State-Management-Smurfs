import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import "./index.css";
import App from "./components/App";
 import combineReducers from './reducers/index';
const store = createStore(combineReducers, applyMiddleware(thunk, logger));


ReactDOM.render(
    <Provider store = {store}>
<App />
</Provider>
, document.getElementById("root"));
