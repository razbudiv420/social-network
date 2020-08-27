const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateMessageTextActionCreator = (newText) => ({type: UPDATE_MESSAGE_TEXT, newText: newText});

let initialState = {
    dialogsData: [
        {id: 0, name: 'Sveta'},
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Kate'}
    ],
    
    messageData: {
        left: [
        {id: 0, name: 'Hi'},
        {id: 1, name: 'Hello'},
        ],
        right: [
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'I\'m fine, thanks'},
        {id: 4, name: 'You are welcome'}
        ],
        updatedText: 'hi'
    }
}
const dialogReducer = (state = initialState, action) => {
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