const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
export const addPostActionCreator = () => ({type: ADD_NEW_POST});
export const updatePostTextActionCreator = (newText) => ({type: UPDATE_POST_TEXT, newText: newText});

const profileReducer = (state, action) => {
    debugger;
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                message: state.updatedText,
                count: 1
            }
            state.postArr.push(newPost);
            state.updatedText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.updatedText = action.newText;
            return state;
        default:
            return state
    }
}

export default profileReducer;