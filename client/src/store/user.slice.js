import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("_", async () => {
  const res = await axios.get("http://localhost:5000/api/user/");
  return res.data;
});

export const deleteUser = createAsyncThunk("__", async (id) => {
  const res = await axios.delete(`http://localhost:5000/api/user/${id}`);
  return res.data;
});

export const createUser = createAsyncThunk("___", async (username) => {
  const res = await axios.post("http://localhost:5000/api/user/", {
    username,
  });
  return res.data;
});

const initialState = {
  data: [],
  status: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(createUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const { reset } = userSlice.actions;
