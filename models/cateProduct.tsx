import { Product } from "./product";

export type CateProduct = {
  _id?: string;
  name: string;
  image: string;
  products: Product[];
};

export type PrdCate = {
  cateproduct: {
    _id: string;
    name: string;
    status: number;
    products?: Product[];
  };
  products: Product[];
};
