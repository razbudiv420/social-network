import React from 'react';
import s from './ProfileInfo.module.css';
const ProfileInfo = (props) => {
return ( 
    <div>
     <div>
      <img alt = "" className = {s.profileImg} src = "https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"></img>
      </div>
      <div className = {s.description}>
        <img src={props.profile.photos.large}/>
        <h5>{props.profile.aboutMe}</h5>
        <h5>{props.profile.contacts.instagram}</h5>
      </div>
      </div>
 );
}

export default ProfileInfo;
