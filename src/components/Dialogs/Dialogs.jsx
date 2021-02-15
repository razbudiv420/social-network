import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem';
import Message from './Message';
import NewMessage from './NewMessage';


const Dialogs = (props) => {

let dialogsElement = props.dialogsData.map((dialog) => <DialogItem name = {dialog.name} id = {dialog.id}/>);
let message = props.messageData.map((messageEl) => <Message message = {messageEl.name}/> );

const textHandler  = (e) => {
     props.textHandler(e.target.value);
}

const submit = value =>{

}
const addNewMessage  = (value) => {
    props.messageHandler(value.message)
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
        <NewMessage onSubmit={addNewMessage}/>
        </div>
        
        </div>
    );
}

export default Dialogs;