import { News } from "./news";

export type CategoryNews = {
  _id?: string;
  name: string;
  news: News[];
};
