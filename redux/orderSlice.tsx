import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { update, getAll, get, remove, add, updateSttOrder } from "../api-client/orderApi";
import { Order } from "../models/order";

type OrderState = {
  orders: Order[];
  order: Order | {};
};

const initialState: OrderState = {
  orders: [],
  order: {},
};

export const getOrders = createAsyncThunk("order/getOrders", async () => {
  const response = await getAll();

  return response;
});

export const deleteOrder = createAsyncThunk("order/deleteOrder", async (id: string) => {
  const res = await remove(id);

  return res;
});

export const addOrder = createAsyncThunk("order/addOrder", async (order: any) => {
  const res = await add(order);

  return res;
});

export const getOrder = createAsyncThunk("order/getOrder", async (id?: any) => {
  const res = await get(id);

  return res;
});

export const updateStt = createAsyncThunk("order/updateStt", async (data: { status: number; orderId: string }) => {
  const res = await updateSttOrder(data);

  return res;
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, { payload }) => {
      state.orders = payload || [];
    });

    builder.addCase(deleteOrder.fulfilled, (state, { payload }) => {
      state.orders = state.orders.filter((item) => item._id !== payload?._id);
    });

    builder.addCase(addOrder.fulfilled, (state, { payload }) => {
      state.orders.push(payload as Order);
    });

    builder.addCase(getOrder.fulfilled, (state, { payload }) => {
      state.order = payload as Order;
    });

    builder.addCase(updateStt.fulfilled, (state, { payload }) => {
      state.orders = state.orders.map((item) => (item._id === payload?._id ? payload : item)) as Order[];
      state.order = payload;
    });
  },
});

export default orderSlice.reducer;
