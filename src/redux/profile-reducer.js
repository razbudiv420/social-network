import {profileAPI} from '../api/api'

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

export const addPostActionCreator = (newPostText) => ({type: ADD_NEW_POST, newPostText});
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
    profile: null,
    status: null
}

export const getProfileById = (userId) => (dispatch) => {
               
    profileAPI.getProfile(userId).then(response => {
                 dispatch(setProfile(response))
        })
}

export const getStatusById = (userId) => (dispatch) => {
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
            let newPost = action.newPostText;
            return {
                ...state,
                postArr: [...state.postArr, {id: 0, message: newPost, count: '40'}],
            }
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
