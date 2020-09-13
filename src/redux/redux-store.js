import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
    });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;