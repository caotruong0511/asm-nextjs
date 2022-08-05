import { News } from "./news";

export type CategoryNews = {
  _id?: string;
  name: string;
  news: News[];
};

export type NewsCate = {
  catenew: CategoryNews;
  news: News[];
};
