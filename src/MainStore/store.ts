import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../Slice/Login/LoginReducer";

const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
});

export default store;
