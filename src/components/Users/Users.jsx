import React from 'react';
import {NavLink} from 'react-router-dom'
import userStyle from './User.module.css';
import imgUrl from '../../assets/img.png';
import * as axios from 'axios';
const Users = (props) => {
        let pagesCount = Math.ceil (props.totalCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {props.onPageChange(p)} }
                    className={props.currentPage === p && userStyle.selectedPage}>{p}</span>
                })
                }
            </div>
        {
        props.users.map(user => <div className={userStyle.container}>
            <div className={userStyle.introduce}>
                <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : imgUrl}/>
                </NavLink>
                <span>{user.name}</span>
                {user.followed 
                ? <button onClick={ ()=>{ axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                    withCredentials: true,
                     headers: {
                         "API-KEY": "7ffea1f0-b8dc-403a-99a8-09361a1009a3"
                    }
                }).then(response=>{
                    if(response.data.resultCode == 0) props.unfollow(user.id)
                })
             } }>UNFOLLOW</button> 
                : <button onClick={ ()=>{ axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{}, {
                    withCredentials: true,
                     headers: {
                         "API-KEY": "7ffea1f0-b8dc-403a-99a8-09361a1009a3"
                    }
                }).then(response=>{
                    if(response.data.resultCode == 0) props.follow(user.id)
                })   } }>FOLLOW</button>}
            </div>
        </div>)
        }
    </div>
    
}
export default Users;
