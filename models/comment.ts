import { User } from "./users";

export type Cmt = {
  _id?: string;
  userId: string;
  productId: string;
  content: string;
  createdAt?: Date;
  user?: User;
  slug?: string;
};
