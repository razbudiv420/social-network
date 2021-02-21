import { setAuth } from "./auth-reducer"


const SET_INITIALIZED = "SET_INITIALIZED"

let initialState = {
    initialized: false
}

const setInitialized = () => ({type: SET_INITIALIZED})

export const setInitial = () => (dispatch) => {
    let promise = dispatch(setAuth())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })
}

export const initialReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:  
        return state
        }
    }

