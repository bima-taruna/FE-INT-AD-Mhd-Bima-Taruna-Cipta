import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

/* This code snippet is setting up a request interceptor for the Axios instance `axiosInstance`. */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
