import { axiosInstance } from './axios';

export const getPosts = async (filter: string | null | undefined) => {
  const res = await axiosInstance.get(filter ? `/products?filter=${filter}` : '/products');
  console.log(res.data);
  return res.data;
};

export const getPost = async (id: number, qr: boolean) => {
  const res = await axiosInstance.get(`/products/${id}?qr=${qr === null ? true : qr}`);
  console.log(res.data);
  return res.data;
};

type Props = {
  id: number;
  like: boolean;
};

export const likePost = async ({ id, like }: Props) => {
  const res = await axiosInstance.patch(`/products/${id}/like`, { like });
  return res.data;
};
