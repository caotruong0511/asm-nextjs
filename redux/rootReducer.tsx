import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import newReducer from "./cateNewsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  new: newReducer,
});

export default rootReducer;
