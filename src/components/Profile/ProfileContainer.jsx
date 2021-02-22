import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileById, getStatusById, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getAuthorizedId, getProfile, getStatus } from '../../redux/profile-selectors';


class ProfileContainer extends React.Component {
    
    componentDidMount () {
        let userId = this.props.match.params.userId
        if(!userId) userId = this.props.authorizedId;
        this.props.getProfileById(userId)
        this.props.getStatusById(userId)
    }
    
    render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    );
    }
}

const mapStateToProps = state => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        authorizedId: getAuthorizedId(state)
    }
}

export default compose(connect(mapStateToProps, {getProfileById, getStatusById, updateStatus}), withRouter,withAuthRedirect)(ProfileContainer)


