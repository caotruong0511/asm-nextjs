import { Contact, ResponseContact } from "../models/contact";
import axiosClient from "./config";
export const getAll = (): Promise<Contact[]> => {
  return axiosClient.get("/contact");
};

export const remove = (id: string): Promise<Contact> => {
  return axiosClient.delete(`/contact/${id}`);
};

export const add = (contact: Contact): Promise<Contact> => {
  return axiosClient.post("/contact", contact);
};

export const get = (id: string): Promise<Contact> => {
  return axiosClient.get(`/contact/${id}`);
};
