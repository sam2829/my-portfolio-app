import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://sam-scarisbrick-13b7fd9648a6.herokuapp.com',
    withCredentials: true,
});

export default axiosInstance;