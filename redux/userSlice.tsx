import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../api-client/userApi";
import { User } from "../models/users";

type UserState = {
  users: User[];
  user: User | {};
};

const initialState: UserState = {
  users: [],
  user: {},
};

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const response = await getAll();

  if (response.status) {
    return response.payload.users;
  }
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id: string) => {
  const res = await remove(id);

  if (res.status) {
    return res.payload.user;
  }
});

export const addUser = createAsyncThunk("user/addUser", async (user: any) => {
  const res = await add(user);

  if (res.status) {
    return res.payload.user;
  }
});

export const getUser = createAsyncThunk("user/getUser", async (id: any) => {
  const res = await get(id);

  if (res.status) {
    return res.payload.user;
  }
});

export const updateUser = createAsyncThunk("user/updateUser", async (user: any) => {
  const res = await update(user);

  if (res.status) {
    return res.payload.user;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.users = payload || [];
    });

    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      state.users = state.users.filter((item) => item._id !== payload?._id);
    });

    builder.addCase(addUser.fulfilled, (state, { payload }) => {
      state.users.push(payload as User);
    });

    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload as User;
    });

    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.users = state.users = state.users.map((item) => (item._id === payload?._id ? payload : item)) as User[];
    });
  },
});

export default userSlice.reducer;
