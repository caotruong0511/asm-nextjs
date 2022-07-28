import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/users";

type AuthState = {
  isLogged: boolean;
  currentUser: User | {};
};

const initialState: AuthState = {
  isLogged: false,
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, { payload }) {
      state.isLogged = true;
      state.currentUser = payload;
    },
    signout(state) {
      state.isLogged = false;
      state.currentUser = {};
      localStorage.removeItem("auth_token");
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
