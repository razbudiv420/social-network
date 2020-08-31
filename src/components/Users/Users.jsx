import React from 'react';
import userStyle from './User.module.css';
import * as axios from 'axios'
import imgUrl from '../../assets/img.png';
const Users = (props) => {
    const getUsers = () => {
    if(props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {props.setUsers(response.data.items)})
    }
    }
    return <div>
        <button onClick={getUsers}>Get Users</button> 
        {
        props.usersPage.users.map(user => <div className={userStyle.container}>
            <div className={userStyle.introduce}>
                <img src={user.photos.small !== null ? user.photos.small : imgUrl}/>
                <span>{user.name}</span>
                {user.followed 
                ? <button onClick={ ()=>{ props.unfollow(user.id) } }>UNFOLLOW</button> 
                : <button onClick={ ()=>{ props.follow(user.id)   } }>FOLLOW</button>}
            </div>
        </div>)
        }
    </div>
    
}

export default Users;