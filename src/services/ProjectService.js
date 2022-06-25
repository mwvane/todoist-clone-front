import axiosClient from "@/shared/axiosClient";

export default {
    async getProjects() {
        return axiosClient.get('/api/projects/')
    },

    async getProject(id) {
        return axiosClient.get(`/api/projects/${id}/`)
    },

    async updateProject(id, data) {
        return axiosClient.put(`/api/projects/${id}/`, data)
    },

    async createProject(data) {
        return axiosClient.post(`/api/projects/`, data)
    }
}