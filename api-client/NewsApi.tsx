import { News } from "../models/news";
import axiosClient, { axiosServer } from "./config";

export const getAll = (): Promise<News[]> => {
  return axiosServer.get("/news");
};

export const remove = (id: string): Promise<News> => {
  return axiosClient.delete(`/news/${id}`);
};

export const add = (news: News): Promise<News> => {
  return axiosClient.post("/news", news);
};

export const get = (id: string): Promise<News> => {
  return axiosClient.get(`/news/${id}`);
};

export const update = (news: News): Promise<News> => {
  return axiosClient.put(`/news/${news._id}`, news);
};

export const getBySlug = (slug?: any): Promise<News> => {
  return axiosServer.get(`/news/${slug}/getBySlug`);
};
