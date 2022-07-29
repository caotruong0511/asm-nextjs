import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import build from "next/dist/build";
import { add, get, getAll, remove, update } from "../api-client/slide";
import { Silde } from "../models/slide";
type SliddeState = {
  slides: Silde[];
  slide: Silde | {};
};

const initialState: SliddeState = {
  slides: [],
  slide: {},
};

export const getSlides = createAsyncThunk("slide/getUsers", async () => {
  const response = await getAll();

  return response;
});

export const deleteSlide = createAsyncThunk("slide/deleteUser", async (id: string) => {
  const res = await remove(id);

  return res;
});

export const addSlide = createAsyncThunk("slide/addUser", async (user: any) => {
  const res = await add(user);

  return res;
});

export const getSlide = createAsyncThunk("slide/getUser", async (id: any) => {
  const res = await get(id);

  return res;
});

export const updateSlide = createAsyncThunk("slide/updateUser", async (user: any) => {
  const res = await update(user);

  return res;
});
const slideSlide = createSlice({
  name: "slide",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSlides.fulfilled, (state, { payload }) => {
      state.slides = payload || [];
    });

    builder.addCase(deleteSlide.fulfilled, (state, { payload }) => {
      state.slides = state.slides.filter((item) => item._id !== payload?._id);
    });

    builder.addCase(addSlide.fulfilled, (state, { payload }) => {
      state.slides.push(payload as Silde);
    });

    builder.addCase(getSlide.fulfilled, (state, { payload }) => {
      state.slide = payload as Silde;
    });

    builder.addCase(updateSlide.fulfilled, (state, { payload }) => {
      state.slides = state.slides = state.slides.map((item) => (item._id === payload?._id ? payload : item)) as Silde[];
    });
  },
});

export default slideSlide.reducer;
