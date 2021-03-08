import axios from "axios";

import config from "@/config";

let axiosConfig = {};

if (config.isWindow) {
  axiosConfig = {};
} else {
  axiosConfig = {
    baseURL: config.backendSeverURL
  };
}

const request = axios.create(axiosConfig);

// 响应拦截器
request.interceptors.response.use(
  response => {
    return response.data.data || response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default request;
