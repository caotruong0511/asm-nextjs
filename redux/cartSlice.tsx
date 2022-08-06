import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../models/cart";
import { RootState } from "./store";

type CartState = {
  carts: Cart[];
  totalPrice: number;
};

const initialState: CartState = {
  carts: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, { payload }) {
      const exitsProduct = state.carts.find((item) => item.productId === payload.productId);

      if (exitsProduct) {
        exitsProduct.quantity += payload.quantity;
      } else {
        state.carts = [...state.carts, payload];
      }

      state.totalPrice = state.carts.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
    },

    increaseQnt(state, { payload }) {
      const exitsProduct = state.carts.find((item) => item.productId === payload);

      exitsProduct!.quantity++;

      // update total price
      state.totalPrice = state.carts.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
    },

    decreaseQnt(state, { payload }) {
      const exitsProduct = state.carts.find((item) => item.productId === payload);

      if (exitsProduct?.quantity! <= 1) {
        state.carts = state.carts.filter((item) => item.productId !== payload);
      } else {
        exitsProduct!.quantity--;
      }

      // update total price
      state.totalPrice = state.carts.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
    },

    removeCart(state, { payload }) {
      state.carts = state.carts.filter((item) => item.productId !== payload);
      // update total price
      state.totalPrice = state.carts.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
    },

    finishOrder(state) {
      (state.carts = []), (state.totalPrice = 0);
    },
  },
});

export const selectCarts = (state: RootState) => state.cart.carts;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export const { addCart, increaseQnt, decreaseQnt, removeCart, finishOrder } = cartSlice.actions;
export default cartSlice.reducer;
