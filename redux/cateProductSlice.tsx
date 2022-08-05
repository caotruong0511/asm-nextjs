import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../api-client/cateProductApi";
import { CateProduct } from "../models/cateProduct";

type cateProductState = {
  cateProducts: CateProduct[];
  cateProduct: CateProduct | {};
};
const initialState: cateProductState = {
  cateProducts: [],
  cateProduct: {},
};

export const getcateProduct = createAsyncThunk("cateproduct/getcateProduct", async () => {
  const res = await getAll();
  return res;
});
export const removecateProduct = createAsyncThunk("cateproduct/removecateProduct", async (id: string) => {
  const res = await remove(id);
  return res;
});
export const addCateProduct = createAsyncThunk("cateproduct/addCateProduct", async (cateproduct: any) => {
  const res = await add(cateproduct);
  return res;
});
export const getone = createAsyncThunk("cateproduct/getone", async (id: any) => {
  const res = await get(id);
  return res;
});
export const updateCateProduct = createAsyncThunk("cateproduct/updateCateProduct", async (cateproduct: any) => {
  const res = await update(cateproduct);
  return res;
});
const cateProductSlice = createSlice({
  name: "cateproduct",
  initialState,
  reducers: {},
  extraReducers: (buid) => {
    buid.addCase(getcateProduct.fulfilled, (state, { payload }) => {
      state.cateProducts = payload || [];
    }),
      buid.addCase(removecateProduct.fulfilled, (state, { payload }) => {
        state.cateProducts = state.cateProducts.filter((item) => item._id !== payload._id);
      }),
      buid.addCase(addCateProduct.fulfilled, (state, { payload }) => {
        state.cateProducts.push(payload as CateProduct);
      }),
      buid.addCase(getone.fulfilled, (state, { payload }) => {
        state.cateProduct = payload;
      }),
      buid.addCase(updateCateProduct.fulfilled, (state, { payload }) => {
        state.cateProducts = state.cateProducts = state.cateProducts.map((item) =>
          item._id === payload?._id ? payload : item,
        ) as CateProduct[];
      });
  },
});
export default cateProductSlice.reducer;
