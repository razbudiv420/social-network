import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem';
import Message from './Message';


const Dialogs = (props) => {
debugger;
let dialogsElement = props.dialogsData.map((dialog) => <DialogItem name = {dialog.name} id = {dialog.id}/>);
let message = props.messageData.map((messageEl) => <Message message = {messageEl.name}/> );

const textHandler  = (e) => {
     props.textHandler(e.target.value);
}
const messageHandler = () => {
    props.messageHandler();
}
    
    return (
        <div    className = {s.dialogsContainer}>
        <div className = {s.dialogsList}>
        {dialogsElement}
        </div>
        <div className={s.dialogFronts}>
        <div>
        {message}
        </div>
        <textarea onChange={textHandler} value={props.value}></textarea>
        <button onClick={messageHandler}>Отправить</button>
        </div>
        
        </div>
    );
}

export default Dialogs;