import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {compose} from 'redux';
import {connect} from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';


const mapStateToProps = state => {
    return {
    dialogsData: state.dialogPage.dialogsData,
    messageData: state.dialogPage.messages,
    value: state.dialogPage.updatedText,
}
};

const mapDispatchToProps = dispatch => {
    return {
        textHandler: (newText) => {dispatch(updateMessageTextActionCreator(newText))},
        messageHandler: () => {dispatch(addMessageActionCreator())}
    }
}

let DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)

export default DialogsContainer;