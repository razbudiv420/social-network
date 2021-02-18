import {usersAPI, followAPI} from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER'
const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING'

export const followSuccess = (userId) => ({type: FOLLOW, userId: userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount})
export const toggleLoading = (isLoading) => ({type: TOGGLE_PRELOADER, isLoading: isLoading})
export const toggleFollowing = (isLoading, userId) => ({type: TOGGLE_FOLLOWING, isLoading: isLoading, userId: userId})

export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {toggleLoading(true)
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleLoading(false))
                dispatch(setUsers(response.items))
                    dispatch(setCurrentPage(currentPage)) 
                        //dispatch(setTotalCount(response.totalCount))
        })
}
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId))
            followAPI.follow(userId).then(response=>{
             if(response.resultCode == 0) dispatch(followSuccess(userId))
                 dispatch(toggleFollowing(false, userId))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId))
         followAPI.unfollow(userId).then(response=>{
             if(response.resultCode == 0) dispatch(unfollowSuccess(userId))
                dispatch(toggleFollowing(false, userId))
        })
    }
}

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 50,
    currentPage: 1,
    isLoading: true,
    isFollowing: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: 
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId) {
                    return {...u, followed: true}
                } return u;
            })
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    } return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.currentPage
                }
        case SET_TOTAL_COUNT:
                return {
                    ...state,
                    totalCount: action.totalCount
                }
        case TOGGLE_PRELOADER: 
                return {
                    ...state,
                    isLoading: action.isLoading
                }
        case TOGGLE_FOLLOWING:
                return {
                    ...state,
                    isFollowing: action.isLoading
                    ?[...state.isFollowing, action.userId]
                    :state.isFollowing.filter(id => id != action.userId)
                }
        default:
            return state;
    }
}

export default usersReducer;