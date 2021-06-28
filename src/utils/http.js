import axios from "axios";

const instance = axios.create();

// 添加请求拦截器
instance.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
  return response;
}, error => {
  Promise.reject(error);
});

// post
export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res);
    }, error => {
      reject(error);
    })
  })
};