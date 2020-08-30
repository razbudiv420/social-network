import {createStore, combineReducers} from 'redux';
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from './users-reducer';
let reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer
    });

let store = createStore(reducers);

export default store;