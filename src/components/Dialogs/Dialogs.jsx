import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem';
import Message from './Message';
import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/state';

const Dialogs = (props) => {

let dialogsElement = props.state.dialogPage.dialogsData.map((dialog) => <DialogItem name = {dialog.name} id = {dialog.id}/>);
let Leftmessage = props.state.dialogPage.messageData.left.map((messageEl) => <Message className = {s.dialogLeft} message = {messageEl.name}/> );
let Rightmessage = props.state.dialogPage.messageData.right.map((messageEl) => <Message className = {s.dialogRight} message = {messageEl.name}/> )
let currText = React.createRef();
const textHandler = newText => {
     newText = currText.current.value;
     props.dispatch(updateMessageTextActionCreator(newText));
}
const messageHandler = newText => {
    newText = currText.current.value;
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
        <textarea ref={currText} onChange={textHandler} value={props.state.dialogPage.messageData.updatedText}></textarea>
        <button onClick={messageHandler}>Отправить</button>
        </div>
        
        </div>
    );
}

export default Dialogs;