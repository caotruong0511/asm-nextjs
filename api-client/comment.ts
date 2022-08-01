import { Cmt } from "../models/comment";
import axiosClient from "./config";
export const getAll = (): Promise<Cmt[]> => {
  return axiosClient.get("/comment");
};

export const remove = (id: string): Promise<Cmt> => {
  return axiosClient.delete(`/comment/${id}`);
};

export const add = (contact: Cmt): Promise<Cmt> => {
  return axiosClient.post("/comment", contact);
};

export const get = (id: string): Promise<Cmt> => {
  return axiosClient.get(`/comment/${id}`);
};
