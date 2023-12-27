import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getLogin(state, action) {
      // payload = newItem
      state.section = action.payload;
    },
  },
});

export const { getLogin } = authSlice.actions;

export default authSlice.reducer;
