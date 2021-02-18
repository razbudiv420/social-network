import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { required, maxLength200 } from '../../helpers/validators'
import CustomField from '../Commons/CustomField'

const NewMessageReduxForm = (props) => {
 
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="message" component={CustomField} fieldType="textarea" label="Введите сообщение" validate={required, maxLength200}/>
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