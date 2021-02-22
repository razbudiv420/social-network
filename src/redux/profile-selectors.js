import {createSelector} from 'reselect'

const getProfileSelector = state => {
    return state.postPage.profile
}

export const getProfile = createSelector(getProfileSelector, (profile) => {
    return profile
})

const getStatusSelector = state => {
    return state.postPage.status
}

export const getStatus = createSelector(getStatusSelector, (status) => {
    return status
})

const getAuthorizedIdSelector = state => {
    return state.auth.id
}

export const getAuthorizedId = createSelector(getAuthorizedIdSelector, (id) => {
    return id
})