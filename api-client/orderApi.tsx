import { Order } from "../models/order";
import axiosClient from "./config";

export const getAll = (): Promise<Order[]> => {
  return axiosClient.get("/order");
};

export const remove = (id: string): Promise<Order> => {
  return axiosClient.delete(`/order/${id}`);
};

export const add = (order: Order): Promise<Order> => {
  return axiosClient.post("/order", order);
};

export const get = (id?: string): Promise<Order> => {
  return axiosClient.get(`/order/${id}`);
};

export const update = (order: Order): Promise<Order> => {
  return axiosClient.put(`/order/${order._id}`, order);
};

export const updateSttOrder = (data: { status: number; orderId: string }): Promise<Order> => {
  return axiosClient.put(`/order/${data.orderId}`, { status: data.status });
};
