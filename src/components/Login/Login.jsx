import React from 'react'
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
            <Field name='login' component='input' placeholder='Введите логин'></Field>
                </div>
                  <div>
            <Field name="password" component='input' placeholder='Введите пароль'></Field>
                 </div>
                 <div>
                     <Field name="rememberMe" component="input" type="checkbox"/>Запомнить меня
                 </div>
            </div>
            <button type="submit">Войти</button>
        </form>
    )
}

const LoginFormRedux = reduxForm({
    form: 'loginForm'
})(LoginForm)

const LoginToConnect = (props) => {
   const submit = value => {
        console.log(value)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={submit}/>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

const Login = connect(mapStateToProps)(LoginToConnect)

export default Login;