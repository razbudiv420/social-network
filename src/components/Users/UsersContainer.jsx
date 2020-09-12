import React from 'react';
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../Commons/Preloader';
import {usersAPI} from '../../api/api';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleLoading, toggleFollowing } from '../../redux/users-reducer';

class UserContainer extends React.Component {
   
    componentDidMount = () => {
        this.props.toggleLoading(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleLoading(false);
            this.props.setUsers(response.items)
           //this.props.setTotalCount(response.data.totalCount)  
        })
}

    onPageChange = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleLoading(true);
        usersAPI.getUsers(page, this.props.pageSize).then(response => {
            this.props.toggleLoading(false);
            this.props.setUsers(response.items)
            //this.props.setTotalCount(response.data.totalCount)
    })
}

    render () {
        return <>
    {this.props.isLoading ? <Preloader/> : null}  
    <Users onPageChange = {this.onPageChange}
           toggleFollowing = {this.props.toggleFollowing}
           currentPage  = {this.props.currentPage}
           pageSize     = {this.props.pageSize}
           totalCount   = {this.props.totalCount}
           follow       = {this.props.follow}
           unfollow     = {this.props.unfollow}
           users        = {this.props.users}
           isLoading    = {this.props.isLoading}
           isFollowing  = {this.props.isFollowing}
    />
        </>
}
}

const mapStateToProps = state => {
    return { 
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        users: state.usersPage.users,
        isLoading: state.usersPage.isLoading,
        isFollowing: state.usersPage.isFollowing
}
    }


const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleLoading,
    toggleFollowing
}
)(UserContainer);

export default UsersContainer;