import { User } from "../models/users";
import axiosClient from "./config";

export const signup = (user: User) => {
  return axiosClient.post("/signup", user);
};
