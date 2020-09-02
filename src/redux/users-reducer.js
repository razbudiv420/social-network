const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 10,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    debugger;
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
        default:
            return state;
    }
}

export default usersReducer;