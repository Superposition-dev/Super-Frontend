import axios, { AxiosRequestConfig } from 'axios';
const getAxiosInstance = (ContentType: string) => {
  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      'Content-Type': ContentType,
    },
    withCredentials: true,
  };
  const instance = axios.create(config);
  instance.defaults.timeout = 3000;
  return instance;
};

export const axiosInstance = getAxiosInstance('application/json');
export const axiosImgInstance = getAxiosInstance('multipart/form-data');
