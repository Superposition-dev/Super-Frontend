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
