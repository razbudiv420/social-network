import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {setUserProfile} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
debugger;
class ProfileContainer extends React.Component{

componentDidMount () {
    let userId = this.props.match.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
        this.props.setUserProfile(response.data)  
    })
}
render () {
    return (
      <div>
      <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
    }
}
const mapStateToProps = (state) => ({
    profile: state.postPage.profile
})
const withRouterHOC = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(withRouterHOC);