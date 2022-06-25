import axiosClient from "@/shared/axiosClient";

export default {
    async getSections() {
        return axiosClient.get('/api/sections/')
    },

    async getSection(id) {
        return axiosClient.get(`/api/sections/${id}/`)
    },

    async updateSection(id, data) {
        return axiosClient.put(`/api/sections/${id}/`, data)
    },

    async createSection(data) {
        return axiosClient.post(`/api/sections/`, data)
    }
}