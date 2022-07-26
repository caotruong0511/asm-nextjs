export type ResponseUser = {
  status: boolean;
  payload: {
    users: User[];
    user: User;
  };
};

export type User = {
  _id?: string;
  name: string;
  email: string;
  avatar: string;
  role: number;
  createdAt?: Date;
};
