import { ResponseUser, User } from "../models/users";
import axiosClient from "./config";

export const getAll = (): Promise<ResponseUser> => {
  return axiosClient.get("/users");
};

export const remove = (id: string): Promise<ResponseUser> => {
  return axiosClient.delete(`/users/${id}`);
};

export const add = (user: User): Promise<ResponseUser> => {
  return axiosClient.post("/users", user);
};

export const get = (id: string): Promise<ResponseUser> => {
  return axiosClient.get(`/users/${id}`);
};

export const update = (user: User): Promise<ResponseUser> => {
  return axiosClient.put(`/users/${user._id}`, user);
};
