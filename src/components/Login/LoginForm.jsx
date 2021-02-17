import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required, maxLength15} from '../../helpers/validators'
import CustomField from './CustomField'

const LoginFormToRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='login' component={CustomField} type="input" label='Введите логин' validate={[required, maxLength15]}></Field>
            <Field name="password" component={CustomField} type="input" label='Введите пароль' validate={[required, maxLength15]}></Field>
                 <div>
                     <Field name="rememberMe" component={CustomField} type="checkbox" label={"Запомнить меня"} validate={required}/>
                 </div>
            <button type="submit">Войти</button>
        </form>
    )
}

export default  reduxForm({
    form: 'LoginForm'
})(LoginFormToRedux)