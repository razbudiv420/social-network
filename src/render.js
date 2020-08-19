import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './components/redux/state';

export const rerenderAll = (state) => {
    ReactDOM.render(<App state = {state} addPost = {addPost}/>, document.getElementById('root'));
}
