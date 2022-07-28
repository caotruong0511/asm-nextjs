import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import contactReducer from "./contactSlice";

const rootReducer = combineReducers({
  user: userReducer,
  contact: contactReducer,
});

export default rootReducer;
