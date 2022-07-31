import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { start } from "repl";
import { getAll, remove, add } from "../api-client/contactApi";
import { Contact } from "../models/contact";
type ContactState = {
  contact: Contact[];
};
const initialState: ContactState = {
  contact: [],
};
export const getContact = createAsyncThunk("contact/", async () => {
  const res = await getAll();
  return res;
});
export const addContact = createAsyncThunk("contact/add", async (values: Contact) => {
  const res = await add(values);
  return res;
});

export const getContactDel = createAsyncThunk("contact/:id", async (id: string) => {
  const res = await remove(id);
  return res;
});
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContact.fulfilled, (state, { payload }) => {
      state.contact = payload || [];
    });
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.contact.push(payload as Contact);
    });
    builder.addCase(getContactDel.fulfilled, (state, { payload }) => {
      state.contact = state.contact.filter((item) => item._id !== payload?._id);
    });
  },
});
export default contactSlice.reducer;
