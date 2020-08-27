import React from 'react';
import MyPostsContainer from '../MyPosts/MyPostContainer'
import ProfileInfo from './ProfileInfo';
const Profile = (props) => {
    return (
      <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
      </div>
    );
}

export default Profile;