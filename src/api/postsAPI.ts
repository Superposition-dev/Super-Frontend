import { axiosInstance } from './axios';

export const getPosts = async () => {
  const res = await axiosInstance.get('/products');
  console.log(res.data)
  return res.data;
};

export const getPost = async (id: number, qr: boolean) => {
  const res = await axiosInstance.get(`/products/${id}?qr=${qr === null ? true : qr}`);
  return res.data;
};

type Props ={
  id: number,
  like: boolean
}

export const likePost = async ({id,like}:Props) => {
  const res = await axiosInstance.patch(`/products/${id}/like`,{like});
  return res.data;
};