import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1ODgyOTc4MSwiZXhwIjoxNjU5MTg5NzgxfQ.R5I_B9OVpZHefoouWqgrcQF9Nd2nbuZHtg3HNYFZz48";
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosClient;
