import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import newReducer from "./cateNewsSlice";
import contactReducer from "./contactSlice";
import authReducer from "./authSlice";
import slideReducer from "./slide";

const rootReducer = combineReducers({
  user: userReducer,
  new: newReducer,
  auth: authReducer,
  contact: contactReducer,
  slide: slideReducer,
});

export default rootReducer;
