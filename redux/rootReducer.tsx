import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import contactReducer from "./contactSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  contact: contactReducer,
});

export default rootReducer;
