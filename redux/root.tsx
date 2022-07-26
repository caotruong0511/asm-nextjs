import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
});

export default rootReducer;
