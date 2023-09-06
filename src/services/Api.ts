import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export default api


// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await axios.post(process.env.REACT_APP_API_URL + '/refreshtoken', { refreshToken });
                const { accessToken } = response.data;

                localStorage.setItem('accessToken', accessToken);

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return axios(originalRequest);
            } catch (error) {
                // Handle refresh token error or redirect to login
            }
        }

        return Promise.reject(error);
    }
);