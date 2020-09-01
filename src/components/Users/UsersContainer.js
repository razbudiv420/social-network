import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../redux/users-reducer';
import Users from './Users';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return { 
        usersPage: state.usersPage,
        pageSize: state.pageSize,
        totalCount: state.totalCount,
        currentPage: state.currentPage
}
    }


const mapDispatchToProps = dispatch => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalCount: (totalCount) => {dispatch(setTotalCountAC(totalCount))}
}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;