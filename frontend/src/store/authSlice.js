import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  isverify: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    verify: (state, action) => {
      state.status = true;
      state.isverify = true;
      state.user = action.payload.user;
    },
    login: (state, action) => {
      state.status = true;
      state.isverify = true;
      state.user = action.payload.user;
    },
    logout: (state, action) => {
      state.status = false;
      state.user = null;
    },
  },
});

export const { verify, login, logout } = authSlice.actions;

export default authSlice.reducer;
