import { Cmt } from "../models/comment";
import axiosClient from "./config";
export const getAll = (): Promise<Cmt[]> => {
  return axiosClient.get("/comment");
};

export const remove = (id: string): Promise<Cmt> => {
  return axiosClient.delete(`/comment/${id}`);
};

export const add = (comment: Cmt): Promise<Cmt> => {
  return axiosClient.post("/comment", comment);
};

export const get = (id: string): Promise<Cmt> => {
  return axiosClient.get(`/comment/${id}`);
};

export const getByProduct = (slug: string): Promise<Cmt[]> => {
  return axiosClient.get(`/comment/getByProduct/${slug}`);
};
