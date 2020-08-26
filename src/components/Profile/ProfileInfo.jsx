import React from 'react';
import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
return ( 
    <div>
     <div>
      <img alt = "" className = {s.profileImg} src = "https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"></img>
      </div>
      <div className = {s.description}>
        ava + description
      </div>
      </div>
 );
}

export default ProfileInfo;
