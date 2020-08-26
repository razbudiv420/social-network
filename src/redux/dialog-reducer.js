const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateMessageTextActionCreator = (newText) => ({type: UPDATE_MESSAGE_TEXT, newText: newText});

const dialogReducer = (state, action) => {
    debugger;
    switch(action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                name: state.messageData.updatedText,
            }
            state.messageData.right.push(newMessage);
            state.messageData.updatedText = '';
            return state;
        ;
        case UPDATE_MESSAGE_TEXT:
            state.messageData.updatedText = action.newText;
            return state;
        ;
        default:
            return state;
    }
}

export default dialogReducer;