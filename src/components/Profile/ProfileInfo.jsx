import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../Commons/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
return ( 
    <div>
     <div>
      <img alt = "" className = {s.profileImg} src = "https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"></img>
      </div>
      <div className = {s.description}>
        <img src={props.profile.photos.large}></img>
        <div>{props.profile.fullName}</div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
      </div>
 );
}

export default ProfileInfo;
