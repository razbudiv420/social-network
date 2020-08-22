import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updatePostText} from './redux/state';
import state, {subscribe} from './redux/state';

const rerenderAll = (state) => {
    ReactDOM.render(<App state = {state} addPost = {addPost} updatePostText={updatePostText}/>, document.getElementById('root'));
}

rerenderAll(state);

subscribe(rerenderAll)

serviceWorker.unregister();
