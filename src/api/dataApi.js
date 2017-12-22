import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
    baseURL: config.baseUrl,
    timeout: 10000,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

const get = async (requestInfo) => {
    return await axiosInstance.request({
        url: config.asset.get.url,
        method: config.asset.get.method
    });
};

export default { get };
