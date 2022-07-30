import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import newReducer from "./cateNewsSlice";
import newsReducer from "./newsSlice";
import contactReducer from "./contactSlice";
import authReducer from "./authSlice";
import slideReducer from "./slide";
import productReducer from "./productSlice"

const rootReducer = combineReducers({
  user: userReducer,
  new: newReducer,
  news: newsReducer,
  auth: authReducer,
  contact: contactReducer,
  slide: slideReducer,
  product:productReducer
});

export default rootReducer;
