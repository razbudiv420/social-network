import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfile, getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    
    componentDidMount () {
        let userId = this.props.match.params.userId
        if(!userId) userId = 11212;
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    
    render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.postPage.profile,
        status: state.postPage.status
    }
}

export default compose(connect(mapStateToProps, {setProfile, getProfile, getStatus, updateStatus}), withRouter,withAuthRedirect)(ProfileContainer)


