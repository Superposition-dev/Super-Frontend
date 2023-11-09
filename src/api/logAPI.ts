import { axiosInstance } from './axios';

export const patchInsta = async (id: number) => {
  const res = await axiosInstance.patch(`/products/${id}/insta`);
  return res;
};
export const patchGoogle = async (id: number) => {
  const res = await axiosInstance.patch(`/products/${id}/google`);
  return res;
};
export const patchView = async (id: number) => {
  const res = await axiosInstance.patch(`/products/${id}/view`);
  return res;
};

export const getTest = async () => {
  const res = await axiosInstance.get(`/posts/1`);
  console.log(res.data);
  return res.data;
};
