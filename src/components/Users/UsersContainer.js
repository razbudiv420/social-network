import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC, toggleLoadingAC } from '../../redux/users-reducer';
import Users from './UsersAPIContainer';
import {connect} from 'react-redux';
import UsersAPIContainer from './UsersAPIContainer';

const mapStateToProps = state => {
    return { 
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        users: state.usersPage.users,
        isLoading: state.usersPage.isLoading
}
    }


const mapDispatchToProps = dispatch => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalCount: (totalCount) => {dispatch(setTotalCountAC(totalCount))},
        toggleLoading: (isLoading) => {dispatch(toggleLoadingAC(isLoading))}
}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;