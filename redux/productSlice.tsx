import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const products = await (await fetch("https://61e6ad49ce3a2d0017359351.mockapi.io/products")).json();
  return products;
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id: string) => {
  const response = await (
    await fetch(`https://61e6ad49ce3a2d0017359351.mockapi.io/products/${id}`, {
      method: "DELETE",
    })
  ).json();
  return response;
});

type ProductState = {
  value: { name: string; id: string }[];
};

const initialState: ProductState = {
  value: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.value = payload;
    });

    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      state.value = state.value.filter((item) => item.id !== payload.id);
    });
  },
});

export default productSlice.reducer;
