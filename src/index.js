import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "mobx-react";
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppStore from "./stores/AppStore";
import { BrowserRouter } from "react-router-dom";

let appStore = new AppStore();

ReactDOM.render(
    <Provider appStore={appStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
