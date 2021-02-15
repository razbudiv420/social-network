import React from 'react'
import {Field, reduxForm} from 'redux-form'

const NewMessageReduxForm = (props) => {
 
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="message" component="textarea" type="text"/>
        </div>
        <div>
            <button type="submit">Отправить</button>
        </div>
    </form>
    )
}

const NewMessage = reduxForm({
    form: 'NewMessage'
})(NewMessageReduxForm)

export default NewMessage;