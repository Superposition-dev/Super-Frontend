import { axiosInstance } from './axios';

export const getPosts = async () => {
  const res = await axiosInstance.get('/products');
  return res.data;
};

export const getPost = async (id: number, qr: boolean) => {
  const res = await axiosInstance.get(`/products/${id}?qr=${qr === null ? true : qr}`);
  return res.data;
};

export const likePost = async (id: number, isLike: boolean) => {
  const res = await axiosInstance.patch(`/products/${id}/like`, { isLike });
  return res.data;
};
