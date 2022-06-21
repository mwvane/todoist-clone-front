import axiosClient from "@/shared/axiosClient";

export default {
    async login({username, password}) {
        return axiosClient.post('/api/login/', {username, password})
    },

    async register({first_name, last_name, username, email, password}) {
        return axiosClient.post('/api/register/', {first_name, last_name, username, email, password})
    },

    saveToken(token) {
        localStorage.setItem('LOGGED_IN_TOKEN', token)
    },

    isLoggedIn() {
        return !!this.getToken()
    },

    getToken() {
        return localStorage.getItem('LOGGED_IN_TOKEN');
    }

}