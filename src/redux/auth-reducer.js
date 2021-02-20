import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form'
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const SET_USER_DATA = 'SET-USER-DATA';

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});

export const setAuth = () => {
   return(dispatch) => {authAPI.makeAuth()
    .then(response => {
     if(response.resultCode === 0) {
        let {id, email, login} = response.data
             dispatch(setUserData(id, email, login, true))
            }
        })
    }
}

export const loginAuth = (email, password, rememberMe) => {
    return (dispatch) => {authAPI.login(email, password, rememberMe)
    .then(response => {
        if(response.resultCode === 0) {
             dispatch(setAuth())
        } else {
            let errorMessage = response.messages.length > 0 ? response.messages[0] : "Authentification error"
            dispatch(stopSubmit("LoginForm", {_error: errorMessage}))
        }
    })}
}

export const logout = () => {
    return(dispatch) => {authAPI.logout()
    .then(response => {
        if(response.resultCode === 0){
            dispatch(setUserData(null, null, null, false))
        }
    })
    }
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_USER_DATA: 

            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }

        default:
            return state

    }
}

export default authReducer;