import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./store/sectionSlice";
import authReducer from "./store/authSlice";

const store = configureStore({
  reducer: {
    section: sectionReducer,
    auth: authReducer,
  },
});

export default store;
