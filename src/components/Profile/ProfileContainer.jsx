import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfile, getProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    
    componentDidMount () {
        this.props.getProfile(this.props)
    }
    
    render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.postPage.profile,
    }
}

export default compose(connect(mapStateToProps, {setProfile, getProfile}), withRouter,withAuthRedirect)(ProfileContainer)


