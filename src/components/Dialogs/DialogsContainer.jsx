import React from 'react';
import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
let state = props.store.getState().dialogPage;
let dialogsElement = state.dialogsData;
let Leftmessage = state.messageData.left;
let Rightmessage =state.messageData.right;

const textHandler  = (newText) => {
     props.dispatch(updateMessageTextActionCreator(newText));
}
const messageHandler = () => {
    props.dispatch(addMessageActionCreator());
}
    return (
        <Dialogs textHandler={textHandler} messageHandler={messageHandler} 
                 dialogsElement={dialogsElement} Leftmessage={Leftmessage} 
                 Rightmessage={Rightmessage} value={state.messageData.updatedText}/>
    );
}

export default DialogsContainer;