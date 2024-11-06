import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://samscarisbrick.co.uk',
    withCredentials: true,
});

export default axiosInstance;