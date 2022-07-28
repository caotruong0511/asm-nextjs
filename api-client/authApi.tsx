import { User } from "../models/users";
import axiosClient from "./config";

export const signup = (user: User) => {
  return axiosClient.post("/signup", user);
};

export const signin = (user: { email: string; password: string }): Promise<{ token: string; user: User }> => {
  return axiosClient.post("/signin", user);
};
