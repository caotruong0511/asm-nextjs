import { Slider } from "../models/slider";
import axiosClient from "./config";

export const getAll = (): Promise<Slider[]> => {
  return axiosClient.get("/slider");
};

export const remove = (id: string): Promise<Slider> => {
  return axiosClient.delete(`/slider/${id}`);
};

export const add = (img: Slider): Promise<Slider> => {
  return axiosClient.post("/slider", img);
};

export const get = (id: string): Promise<Slider> => {
  return axiosClient.get(`/slider/${id}`);
};

export const update = (img: Slider): Promise<Slider> => {
  return axiosClient.put(`/slider/${img._id}`, img);
};
