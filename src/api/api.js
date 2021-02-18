import * as axios from 'axios';

const request = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "7ffea1f0-b8dc-403a-99a8-09361a1009a3"
    }
})

const usersAPI = {
    getUsers(currentPage, pageSize) {
        return request.get(`users?page=${currentPage}&count=${pageSize}`) 
         .then(response=> {
            return response.data
        })
    }
}

const followAPI = {
    follow(userId) {
        return request.post(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    },

    unfollow(userId) {
        return request.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    }
}

const authAPI = {
    makeAuth() {
        return request.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }, 
    login (email, password, rememberMe = null) {
        return request.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout () {
        return request.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}

const profileAPI = {
    getProfile(userId) {
        return request.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getStatus(userId) {
        return request.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },

    updateStatus(status) {
        return request.put(`profile/status/`, {status})
            .then(response => {
                return response.data
            })
    }
}

export  {usersAPI, followAPI, authAPI, profileAPI};