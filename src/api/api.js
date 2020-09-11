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
export default usersAPI;