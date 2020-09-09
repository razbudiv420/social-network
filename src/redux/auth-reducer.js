const SET_USER_DATA = 'SET-USER-DATA';

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    debugger;
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