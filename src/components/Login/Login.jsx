import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import {loginAuth} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

const LoginToConnect = (props) => {
   const submit = value => {
        props.loginAuth(value.email, value.password, value.rememberMe)
    }

    if(props.auth.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={submit}/>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

const Login = connect(mapStateToProps, {loginAuth})(LoginToConnect)

export default Login;