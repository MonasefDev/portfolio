import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./store/sectionSlice";

const store = configureStore({
  reducer: {
    section: sectionReducer,
  },
});

export default store;
