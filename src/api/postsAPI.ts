import { axiosInstance } from './axios';



export const getPost = async (id: number, qr: string) => {
  const res = await axiosInstance.get(`/products/${id}?isQr=${qr === "false" ? false : true}`);
  return res.data;
};

export const getPosts = async (filter: string | null | undefined) => {
  const res = await axiosInstance.get(filter ? `/products?filter=${filter}` : '/products');
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
