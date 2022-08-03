import { CateProduct, PrdCate } from "../models/cateProduct";
import axiosClient, { axiosServer } from "./config";

export const getAll = (): Promise<CateProduct[]> => {
  return axiosServer.get("/cateproduct");
};
export const remove = (id: string): Promise<CateProduct> => {
  return axiosClient.delete(`/cateproduct/${id}`);
};
export const add = (cateproduct: CateProduct): Promise<CateProduct> => {
  return axiosClient.post("/cateproduct", cateproduct);
};

export const get = (id?: string): Promise<PrdCate> => {
  return axiosServer.get(`/cateproduct/${id}`);
};

export const update = (cateproduct: CateProduct): Promise<CateProduct> => {
  return axiosClient.put(`/cateproduct/${cateproduct._id}`, cateproduct);
};
