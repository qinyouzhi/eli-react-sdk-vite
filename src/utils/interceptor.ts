import axios from 'axios';

const service = axios.create({
  baseURL: PUBLIC_BASE_URL,
  timeout: 60000,
});

const err = error => {
  if (error.response) {
    const data = error.response.data;
    console.log(data);
  } else {
    // 请求超时状态
    if (error.message.includes('timeout')) {
      console.log('超时了');
    } else {
      // 可以展示断网组件
      console.log('断网了');
    }
  }
  return Promise.reject(error);
};

const handleParams = async config => {
  return config;
};

service.interceptors.request.use(config => {
  return handleParams(config);
}, err);

service.interceptors.response.use(response => {
  const {
    status,
    data: { code },
  } = response;

  if (status === 200 && code === 0) {
    return response.data;
  }

  return Promise.reject(response.data);
}, err);

export default service;
