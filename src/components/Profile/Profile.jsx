import React from 'react';
import MyPostContainer from '../MyPosts/MyPostContainer'
import ProfileInfo from './ProfileInfo';
import Preloader from '../Commons/Preloader';

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  } else
    return (
      <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostContainer store={props.store}/>
      </div>
    );
}

export default Profile;