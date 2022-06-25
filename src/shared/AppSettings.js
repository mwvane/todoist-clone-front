
export default {
    apiUrl() {
        const apiUrl = process.env.VUE_APP_API_URL
        if (apiUrl) {
            return apiUrl
        }
        return 'https://test-todoist-clone.herokuapp.com/'
    }
}