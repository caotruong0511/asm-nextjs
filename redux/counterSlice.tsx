import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value = state.value + 1;
    },
    decrease(state) {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrease } = counterSlice.actions;
export default counterSlice.reducer;
