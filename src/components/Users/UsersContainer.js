import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleLoading } from '../../redux/users-reducer';
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



const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleLoading
}
)(UsersAPIContainer);

export default UsersContainer;