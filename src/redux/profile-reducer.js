const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export const addPostActionCreator = () => ({type: ADD_NEW_POST});
export const updatePostTextActionCreator = (newText) => ({type: UPDATE_POST_TEXT, newText: newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});

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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export default profileReducer;
