import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'

const LoginToConnect = (props) => {
   const submit = value => {
        console.log(value)
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

const Login = connect(mapStateToProps)(LoginToConnect)

export default Login;