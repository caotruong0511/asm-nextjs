import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../api-client/cateNewsApi";
import { CategoryNews } from "../models/categoryNews";

type NewsState = {
  cateNews: CategoryNews[];
  cateNew: CategoryNews | {};
};

const initialState: NewsState = {
  cateNews: [],
  cateNew: {},
};

export const getCateNews = createAsyncThunk("categoryNews/getNews", async () => {
  const response = await getAll();

  return response;
});

export const deleteCateNews = createAsyncThunk("categoryNews/deleteNews", async (id: string) => {
  const res = await remove(id);
  return res;
});

export const addCateNews = createAsyncThunk("categoryNews/addNews", async (news: any) => {
  const res = await add(news);
  console.log(news);
  return res;
});

export const getCateNew = createAsyncThunk("categoryNews/getNew", async (id: any) => {
  const res = await get(id);
  return res;
});

export const updateCateNews = createAsyncThunk("categoryNews/updateNews", async (news: any) => {
  const res = await update(news);
  return res;
});

const newsSlice = createSlice({
  name: "categoryNews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCateNews.fulfilled, (state, { payload }) => {
      state.cateNews = payload as any;
    });

    builder.addCase(deleteCateNews.fulfilled, (state, { payload }) => {
      state.cateNews = state.cateNews.filter((item) => item._id !== payload?._id);
    });

    builder.addCase(addCateNews.fulfilled, (state, { payload }) => {
      state.cateNews.push(payload as CategoryNews);
    });

    builder.addCase(getCateNew.fulfilled, (state, { payload }) => {
      state.cateNew = payload as CategoryNews;
    });

    builder.addCase(updateCateNews.fulfilled, (state, { payload }) => {
      state.cateNews = state.cateNews = state.cateNews.map((item) =>
        item._id === payload?._id ? payload : item,
      ) as CategoryNews[];
    });
  },
});

export default newsSlice.reducer;
