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
        messages: [
        {id: 0, name: 'Hi'},
        {id: 1, name: 'Hello'},
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'I\'m fine, thanks'},
        {id: 4, name: 'You are welcome'}
        ],
        updatedText: 'hi'
    }
const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_MESSAGE: 
        let messageName = state.updatedText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, name: messageName}],
                updatedText: ''
            }

        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                updatedText: action.newText
            }
        ;
        default:
            return state;
    }
}

export default dialogReducer;