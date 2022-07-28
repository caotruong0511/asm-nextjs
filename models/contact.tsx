export type Contact = {
  _id?: string;
  name: string;
  email: string;
  phone: number;
  message: string;
  createdAt?: Date;
};

export type ResponseContact = {
  status: boolean;
  payload: {
    contact: Contact[];
  };
};
