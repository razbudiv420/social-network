import React from 'react';
import MyPosts from '../MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo';
const Profile = (props) => {
    return (
      <div>
      <ProfileInfo />
      <MyPosts state = {props.state} addPost={props.addPost}/>
      </div>
    );
}

export default Profile;