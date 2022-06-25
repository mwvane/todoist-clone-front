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

function getResponseBody(status, data) {
    return {
        ok: status < 400,
        status: status,
        data: data
    }
}

async function runRequest(method, ...params) {
    try {
        const res = await axiosClient[method](...params)
        return getResponseBody(res.status, res.data)
    } catch (res) {
        return getResponseBody(res.response.status, res.response.data)
    }
}

const handler = {
    get: async (url, params) => runRequest('get', url, params),
    post: async (url, data, config) => runRequest('post', url, data, config),
    put: async (url, data, config) => runRequest('put', url, data, config),
    delete: async (url, params) => runRequest('delete', url, params),
    patch: async (url, params) => runRequest('patch', url, params)
}

export default handler;
