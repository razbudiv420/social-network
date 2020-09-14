import {profileAPI} from '../api/api'

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';

export const addPostActionCreator = () => ({type: ADD_NEW_POST});
export const updatePostTextActionCreator = (newText) => ({type: UPDATE_POST_TEXT, newText: newText});
export const setProfile = (profile) => ({type: SET_PROFILE, profile: profile})


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
    profile: null
}

export const getProfile = (props) => {
    return(dispatch) => {
        let userId = props.match.params.userId
            if(!userId) userId = 2;
                profileAPI.getProfile(userId).then(response => {
                     dispatch(setProfile(response))
        })
    }
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
        default:
            return state
    }
}

export default profileReducer;
