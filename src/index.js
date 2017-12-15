import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './router/index'
import {Provider} from 'react-redux'
import store from "./store/store";
ReactDOM.render(
    <Provider store={store}>
        <Router></Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
