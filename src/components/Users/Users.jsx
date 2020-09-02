import React from 'react';
import userStyle from './User.module.css';
import imgUrl from '../../assets/img.png';

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