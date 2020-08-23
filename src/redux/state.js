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
        ]
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
        if(action.type === 'ADD-NEW-POST') {
            let newPost = {
                message: action.newText,
                count: 1
            }
        
            this._state.postPage.postArr.push(newPost);
            this._state.postPage.updatedText = '';
            this._callSubsciber(this._state);
        } else if(action.type === 'UPDATE-POST-TEXT'){
            this._state.postPage.updatedText = action.newText;
            this._callSubsciber(this._state);
        }
        }
    }


export default store;