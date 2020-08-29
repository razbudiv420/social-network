import React from 'react';
import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
    dialogsData: state.dialogPage.dialogsData,
    messageData: state.dialogPage.messages,
    value: state.dialogPage.updatedText
}
};

const mapDispatchToProps = dispatch => {
    return {
        textHandler: (newText) => {dispatch(updateMessageTextActionCreator(newText))},
        messageHandler: () => {dispatch(addMessageActionCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;