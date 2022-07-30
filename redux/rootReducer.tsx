import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import newReducer from "./cateNewsSlice";
import newsReducer from "./newsSlice";
import contactReducer from "./contactSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  user: userReducer,
  new: newReducer,
  news: newsReducer,
  auth: authReducer,
  contact: contactReducer,
});

export default rootReducer;
