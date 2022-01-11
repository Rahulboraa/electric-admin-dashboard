import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { registerUser } = LoginSlice.actions;
export const getUser = (state) => state.login.user;

export default LoginSlice.reducer;
