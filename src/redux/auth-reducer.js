import {authAPI} from '../api/api';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const SET_USER_DATA = 'SET-USER-DATA';
export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

export const setAuth = () => {
   return(dispatch) => {authAPI.makeAuth().then(response => {
     if(response.resultCode === 0) {
        let {id, email, login} = response.data
             dispatch(setUserData(id, email, login))
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
                isAuth: true
            }

        default:
            return state

    }
}

export default authReducer;