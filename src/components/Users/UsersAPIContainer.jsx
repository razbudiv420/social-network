import React from 'react';
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../Commons/Preloader';

class UsersAPIContainer extends React.Component {
   
    componentDidMount = () => {
        this.props.toggleLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleLoading(false);
            this.props.setUsers(response.data.items)
           //this.props.setTotalCount(response.data.totalCount)  
        })
}

    onPageChange = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleLoading(false);
            this.props.setUsers(response.data.items)
            //this.props.setTotalCount(response.data.totalCount)
    })
}

    render () {
        return <>
    {this.props.isLoading ? <Preloader/> : null}  
    <Users onPageChange = {this.onPageChange}
           currentPage  = {this.props.currentPage}
           pageSize     = {this.props.pageSize}
           totalCount   = {this.props.totalCount}
           follow       = {this.props.follow}
           unfollow     = {this.props.unfollow}
           users        = {this.props.users}
           isLoading    = {this.props.isLoading}
    />
        </>
}
}
export default UsersAPIContainer;