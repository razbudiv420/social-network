
let rerenderAll = () => {
    console.log (state)
};

let state = { 
   
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
}

export const addPost = (newText) => {
    
let newPost = {
        message: newText,
        count: 1
    }

    state.postPage.postArr.push(newPost);
    state.postPage.updatedText = '';
    rerenderAll(state);
}
export const  updatePostText = (newText) => {
        state.postPage.updatedText = newText;
        rerenderAll(state);
    }

export const subscribe = (observer) => {
    rerenderAll = observer;
}
export default state;