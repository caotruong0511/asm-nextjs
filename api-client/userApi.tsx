import { User } from "../models/users";
import axiosClient from "./config";

export const getAll = (): Promise<User[]> => {
  return axiosClient.get("/users");
};

export const remove = (id: string): Promise<User> => {
  return axiosClient.delete(`/users/${id}`);
};

export const add = (user: User): Promise<User> => {
  return axiosClient.post("/users", user);
};

export const get = (id: string): Promise<User> => {
  return axiosClient.get(`/users/${id}`);
};

export const update = (user: User): Promise<User> => {
  return axiosClient.put(`/users/${user._id}`, user);
};
