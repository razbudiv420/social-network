import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem';
import Message from './Message';
import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialog-reducer';

const Dialogs = (props) => {

let dialogsElement = props.state.dialogPage.dialogsData.map((dialog) => <DialogItem name = {dialog.name} id = {dialog.id}/>);
let Leftmessage = props.state.dialogPage.messageData.left.map((messageEl) => <Message className = {s.dialogLeft} message = {messageEl.name}/> );
let Rightmessage = props.state.dialogPage.messageData.right.map((messageEl) => <Message className = {s.dialogRight} message = {messageEl.name}/> )

const textHandler  = (e) => {
     props.dispatch(updateMessageTextActionCreator(e.target.value));
}
const messageHandler = () => {
    props.dispatch(addMessageActionCreator());
}
    return (
        <div    className = {s.dialogsContainer}>
        <div className = {s.dialogsList}>
        {dialogsElement}
        </div>
        <div className={s.dialogFronts}>
        <div className = {s.dialogLeft}>
        {Rightmessage}
        </div>
        <div className = {s.dialogLeft}>
        {Leftmessage}
        </div>
        <textarea onChange={textHandler} value={props.state.dialogPage.messageData.updatedText}></textarea>
        <button onClick={messageHandler}>Отправить</button>
        </div>
        
        </div>
    );
}

export default Dialogs;