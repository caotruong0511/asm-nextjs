import { Product } from "./product";

export type Order = {
  _id?: string;
  customerName: string;
  address: string;
  phone: string;
  email: string;
  totalPrice: number;
  message: string;
  status: number;
  createdAt: Date;
  orderDetails: OrderDetail[];
  updatedAt: Date;
};

export type OrderDetail = {
  _id?: string;
  quantity: number;
  productPrice: number;
  product: Product;
};
