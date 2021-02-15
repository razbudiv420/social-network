const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';


export const addMessageActionCreator = (message) => ({type: ADD_NEW_MESSAGE, message});


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
        ]
    }
const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_MESSAGE: 
        let newMessage = action.message;
            return {
                ...state,
                messages: [...state.messages, {id: 4, name: newMessage}],
            }
        default:
            return state;
    }
}

export default dialogReducer;