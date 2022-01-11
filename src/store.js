import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./components/Admin/LoginSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
