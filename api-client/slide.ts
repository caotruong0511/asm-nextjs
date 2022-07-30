import { Silde } from "../models/slide";
import axiosClient from "./config";

export const getAll = (): Promise<Silde[]> => {
  return axiosClient.get("/slider");
};

export const remove = (id: string): Promise<Silde> => {
  return axiosClient.delete(`/slider/${id}`);
};

export const add = (img: Silde): Promise<Silde> => {
  return axiosClient.post("/slider", img);
};

export const get = (id: string): Promise<Silde> => {
  return axiosClient.get(`/slider/${id}`);
};

export const update = (img: Silde): Promise<Silde> => {
  return axiosClient.put(`/slider/${img._id}`, img);
};
