import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setUserData, setAuth, logout} from '../../redux/auth-reducer';



class HeaderContainer extends React.Component {
    componentDidMount()
    {
        this.props.setAuth();
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

export default connect(mapStateToProps, {setUserData, setAuth, logout})(HeaderContainer);