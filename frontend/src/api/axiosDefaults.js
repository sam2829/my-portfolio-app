import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://samscarisbrick.co.uk',
    withCredentials: true,
});

export default axiosInstance;