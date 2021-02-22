import {createSelector} from 'reselect'

const getUsers = state => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users
})

const getCurrentPageSelector = state => {
    return state.usersPage.currentPage
}

export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage) => {
    return currentPage
})

const getPageSizeSelector = state => {
    return state.usersPage.pageSize
}

export const getPageSize = createSelector(getPageSizeSelector, (pageSize) => {
    return pageSize
})

const getTotalCountSelector = state => {
    return state.usersPage.totalCount
}

export const getTotalCount = createSelector(getTotalCountSelector, (totalCount) => {
    return totalCount
})

const getIsLoadingSelector = state => {
    return state.usersPage.isLoading
}

export const getIsLoading = createSelector(getIsLoadingSelector, (isLoading) => {
    return isLoading
})

const getIsFollowingSelector = state => {
    return state.usersPage.isFollowing
}

export const getIsFollowing = createSelector(getIsFollowingSelector, (isFollowing) => {
    return isFollowing
})