import React from 'react';
import {NavLink} from 'react-router-dom'
import userStyle from './User.module.css';
import imgUrl from '../../assets/img.png';
import {followAPI} from '../../api/api'

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
                ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={ ()=>{ 
                    props.toggleFollowing(true, user.id)
                    followAPI.unfollow(user.id).then(response=>{
                    if(response.resultCode == 0) { 
                        props.unfollow(user.id)
                        props.toggleFollowing(false, user.id)
                    }
                })
             } }>UNFOLLOW</button> 
                : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={ ()=>{ 
                    props.toggleFollowing(true, user.id)
                    followAPI.follow(user.id).then(response=>{
                    if(response.resultCode == 0) {
                        props.follow(user.id)
                        props.toggleFollowing(false, user.id)
                    }
                })   } }>FOLLOW</button>}
            </div>
        </div>)
        }
    </div>
    
}
export default Users;
