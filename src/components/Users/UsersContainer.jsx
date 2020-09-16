import React from 'react';
import Users from './Users'
import Preloader from '../Commons/Preloader';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleLoading, toggleFollowing, getUsers } from '../../redux/users-reducer';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class UserContainer extends React.Component {
   
    componentDidMount = () => {
     this.props.getUsers(this.props.currentPage, this.props.pageSize);
}

    onPageChange = (currentPage) => {
    this.props.getUsers(currentPage, this.props.pageSize);
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

let UsersContainer = compose(connect(mapStateToProps, {
    follow,
    unfollow,
    toggleLoading,
    toggleFollowing,
    getUsers
}
), withAuthRedirect)(UserContainer)

export default UsersContainer;