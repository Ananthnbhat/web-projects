import "materialize-css/dist/css/materialize.min.css";  /*if you dont specify a relative path in import statement, then webpack assumes 
that we are trying to import something from node_modules directory*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
//only for development
// import axios from 'axios';
// window.axios = axios;

const reduxStore = createStore(reducers, {}, applyMiddleware(reduxThunk));     //created a redux store here
//createStore(reducer, initialState, middleware);

ReactDOM.render(
    <Provider store={reduxStore}><App /></Provider>,     /* made the store available to our react App. The provider is a react component which knows 
    if some data changes inside the store and it updates the App of this change. So whatever components are inside the App component will get updated 
    states whenever and wherever applicable */
    document.querySelector('#root'));