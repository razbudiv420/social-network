import React from 'react';
import * as axios from 'axios'
import Users from './Users'

class UsersAPIContainer extends React.Component {
   
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
          //  this.props.setTotalCount(response.data.totalCount)  --uncomment to get full numbers list
        })
}

    onPageChange = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
           // this.props.setTotalCount(response.data.totalCount)
    })
}

    render () {
        return (
    <Users onPageChange = {this.onPageChange}
           currentPage  = {this.props.currentPage}
           pageSize     = {this.props.pageSize}
           totalCount   = {this.props.totalCount}
           follow       = {this.props.follow}
           unfollow     = {this.props.unfollow}
           users        = {this.props.users}
    />
        )
}
}
export default UsersAPIContainer;