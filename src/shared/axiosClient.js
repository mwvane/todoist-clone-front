import axios from 'axios';
import AppSettings from "@/shared/AppSettings";
import AuthService from "@/services/AuthService";

let config = {
    baseURL: AppSettings.apiUrl()
};

const axiosClient = axios.create(config);

axiosClient.interceptors.request.use(config => {
    if (AuthService.isLoggedIn()) {
        config.headers.Authorization = `Token ${AuthService.getToken()}`;
    }
    return config;
});

export default axiosClient;
