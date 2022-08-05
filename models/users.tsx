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

export type UserChangePass = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role?: number;
  oldPassword: string;
  newPassword: string;
  createdAt?: Date;
};
