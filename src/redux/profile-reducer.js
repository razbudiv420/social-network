import {profileAPI} from '../api/api'

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

export const addPostActionCreator = () => ({type: ADD_NEW_POST});
export const updatePostTextActionCreator = (newText) => ({type: UPDATE_POST_TEXT, newText: newText});
export const setProfile = (profile) => ({type: SET_PROFILE, profile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status: status})

let initialState = {
    postArr: [
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '15'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '3'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '1'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '22'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '50'},
        {id: Math.random(1, Date.now()), message: 'hello there!!', count: '50'},
      ],
    updatedText:  'hey!',
    profile: null,
    status: null
}

export const getProfile = (userId) => (dispatch) => {
               
    profileAPI.getProfile(userId).then(response => {
                 dispatch(setProfile(response))
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response =>{
        if(response.resultCode === 0) {
        dispatch(setStatus(status))
        }
    })
}
    


const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_NEW_POST: {
            let message = state.updatedText;
            return {
                ...state,
                postArr: [...state.postArr, {id: 0, message: message, count: '40'}],
                updatedText: ''
            }
        }  
        case UPDATE_POST_TEXT:
            return {
                ...state,
                updatedText: action.newText
            }
        case SET_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export default profileReducer;
