export type User = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  avatar?: string;
  role?: number;
  createdAt?: Date;
};
