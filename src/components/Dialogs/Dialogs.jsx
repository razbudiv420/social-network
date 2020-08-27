import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem';
import Message from './Message';


const Dialogs = (props) => {

let dialogsElement = props.dialogsElement.map((dialog) => <DialogItem name = {dialog.name} id = {dialog.id}/>);
let Leftmessage = props.Leftmessage.map((messageEl) => <Message className = {s.dialogLeft} message = {messageEl.name}/> );
let Rightmessage = props.Rightmessage.map((messageEl) => <Message className = {s.dialogRight} message = {messageEl.name}/> )

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
        <div className = {s.dialogLeft}>
        {Rightmessage}
        </div>
        <div className = {s.dialogLeft}>
        {Leftmessage}
        </div>
        <textarea onChange={textHandler} value={props.value}></textarea>
        <button onClick={messageHandler}>Отправить</button>
        </div>
        
        </div>
    );
}

export default Dialogs;