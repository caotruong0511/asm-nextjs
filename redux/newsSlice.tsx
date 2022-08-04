import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../api-client/NewsApi";
import { News } from "../models/news";

type NewsState = {
  news: News[];
  new: News | {};
};

const initialState: NewsState = {
  news: [],
  new: {},
};

export const getNews = createAsyncThunk("news/getNews", async () => {
  const response = await getAll();
  return response;
});

export const deleteNews = createAsyncThunk("news/deleteNew", async (id: string) => {
  const res = await remove(id);
  return res;
});

export const addNews = createAsyncThunk("news/addNew", async (news: any, { dispatch }) => {
  const res = await add(news);
  await dispatch(getNews()).unwrap();
});

export const getNew = createAsyncThunk("news/getNew", async (id: any) => {
  const res = await get(id);
  return res;
});

export const updateNews = createAsyncThunk("news/updateNew", async (news: any) => {
  const res = await update(news);
  return res;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, { payload }) => {
      state.news = payload as any;
    });

    builder.addCase(deleteNews.fulfilled, (state, { payload }) => {
      state.news = state.news.filter((item) => item._id !== payload?._id);
    });

    builder.addCase(getNew.fulfilled, (state, { payload }) => {
      state.new = payload as News;
    });

    builder.addCase(updateNews.fulfilled, (state, { payload }) => {
      state.news = state.news = state.news.map((item) => (item._id === payload?._id ? payload : item)) as News[];
    });
  },
});

export default newsSlice.reducer;
