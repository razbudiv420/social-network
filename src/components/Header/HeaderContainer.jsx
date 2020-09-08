import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setUserData} from '../../redux/auth-reducer';
import * as axios from 'axios';


class HeaderContainer extends React.Component {
    componentDidMount()
    {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
        if(response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        this.props.setUserData(id, email, login)
        }

        })
    }
    
    render()
    {
    return (
        <Header {...this.props} />
    )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);