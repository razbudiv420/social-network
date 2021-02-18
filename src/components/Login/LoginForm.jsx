import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required, maxLength15} from '../../helpers/validators'
import CustomField from '../Commons/CustomField'

const LoginFormToRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='email' component={CustomField} type="email" fieldType="input" label='Введите email' validate={[required]}></Field>
            <Field name="password" component={CustomField} type="password" fieldType="input" label='Введите пароль' validate={[required, maxLength15]}></Field>
                 <div>
                     <Field name="rememberMe" component={CustomField} type="checkbox" fieldType="checkbox" label={"Запомнить меня"} />
                 </div>
            <button type="submit">Войти</button>
        </form>
    )
}

export default  reduxForm({
    form: 'LoginForm'
})(LoginFormToRedux)