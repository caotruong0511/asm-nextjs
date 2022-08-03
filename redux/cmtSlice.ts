import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove } from "../api-client/comment";
import { Cmt } from "../models/comment";

type CmtState = {
  comments: Cmt[];
  comment: Cmt | {};
};

const initialState: CmtState = {
  comments: [],
  comment: {},
};

export const getCmt = createAsyncThunk("comment/getCmt", async () => {
  const response = await getAll();
  return response;
});

export const deleteCmt = createAsyncThunk("comment/deleteCmt", async (id: string) => {
  const res = await remove(id);
  return res;
});

export const addCmt = createAsyncThunk("comment/addCmt", async (Cmt: any) => {
  const res = await add(Cmt);
  return res;
});

export const getACmt = createAsyncThunk("comment/getNew", async (id: any) => {
  const res = await get(id);
  return res;
});

// export const updateNews = createAsyncThunk("comment/updateNew", async (news: any) => {
//   const res = await update(news);
//   return res;
// });

const newsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCmt.fulfilled, (state, { payload }) => {
      state.comments = payload as any;
    });

    builder.addCase(deleteCmt.fulfilled, (state, { payload }) => {
      state.comments = state.comments.filter((item) => item._id !== payload?._id);
    });

    builder.addCase(addCmt.fulfilled, (state, { payload }) => {
      state.comments.push(payload as Cmt);
    });

    builder.addCase(getACmt.fulfilled, (state, { payload }) => {
      state.comment = payload as Cmt;
    });

    // builder.addCase(updateNews.fulfilled, (state, { payload }) => {
    //   state.news = state.news = state.news.map((item) => (item._id === payload?._id ? payload : item)) as News[];
    // });
  },
});

export default newsSlice.reducer;
