import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer"


let store = {

_state: { 
   
   dialogPage: {
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
},
   postPage: {
    postArr: [
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '15'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '3'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '1'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '22'},
        {id: Math.random(1, Date.now()), message: 'hello there!', count: '50'},
      ],
    updatedText:  'hey!'
}
},

getState () {
    return this._state
},

subscribe (observer) {
    this._callSubsciber = observer;
},

dispatch (action) {
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.postPage = profileReducer(this._state.postPage, action);
        this._callSubsciber(this._state);
}
        
    }
 

export default store;