import React from 'react';
import userStyle from './User.module.css';
import * as axios from 'axios'
import imgUrl from '../../assets/img.png';
class Users extends React.Component {
   
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.setTotalCount)
        })
}
    render () {
        let pagesCount = Math.ceil (this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && userStyle.selectedPage}>{p}</span>
                })
                }
            </div>
        {
        this.props.usersPage.users.map(user => <div className={userStyle.container}>
            <div className={userStyle.introduce}>
                <img src={user.photos.small !== null ? user.photos.small : imgUrl}/>
                <span>{user.name}</span>
                {user.followed 
                ? <button onClick={ ()=>{ this.props.unfollow(user.id) } }>UNFOLLOW</button> 
                : <button onClick={ ()=>{ this.props.follow(user.id)   } }>FOLLOW</button>}
            </div>
        </div>)
        }
    </div>
    
}
}
export default Users;