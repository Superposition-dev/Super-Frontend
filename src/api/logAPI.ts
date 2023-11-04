import { axiosInstance } from "./axios";

export const patchInsta = async (id:number) => {
  const res = await axiosInstance.patch(`/products/${id}/insta`);
  console.log(res)
  return res;
} 
export const patchGoogle = async (id:number) => {
  const res = await axiosInstance.patch(`/products/${id}/google`);
  console.log(res)
  return res;
} 
export const patchView = async (id:number) => {
  const res = await axiosInstance.patch(`/products/${id}/view`);
  console.log(res)
  return res;
} 

