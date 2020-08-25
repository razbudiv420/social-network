import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const rerenderAll = (state) => {
    ReactDOM.render(
    <BrowserRouter>
    <App state = {store.getState()} dispatch={store.dispatch.bind(store)}/>, 
    </BrowserRouter>, document.getElementById('root'))
}

rerenderAll(store.getState);
store.subscribe(rerenderAll)

serviceWorker.unregister();
