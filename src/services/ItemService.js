import axiosClient from "@/shared/axiosClient";

export default {
    async getItems() {
        return axiosClient.get('/api/items/')
    },

    async getItem(id) {
        return axiosClient.get(`/api/items/${id}/`)
    },

    async updateItem(id, data) {
        return axiosClient.put(`/api/items/${id}/`, data)
    },

    async createItem(data) {
        return axiosClient.post(`/api/items/`, data)
    }
}