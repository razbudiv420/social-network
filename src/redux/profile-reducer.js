const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
export const addPostActionCreator = () => ({type: ADD_NEW_POST});
export const updatePostTextActionCreator = (newText) => ({type: UPDATE_POST_TEXT, newText: newText});

let initialState = {
    postArr: [
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '15'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '3'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '1'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '22'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '50'},
      ],
    updatedText:  'hey!'
}
const profileReducer = (state = initialState, action) => {
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