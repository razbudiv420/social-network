import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import  axios from 'axios';
class ProfileContainer extends React.Component {
    
    componentDidMount () {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setProfile(response.data)
        })
    }
    
    render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.postPage.profile
    }
}

const withRouterComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setProfile})(withRouterComponent);

