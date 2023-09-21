import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  section: {},
  sectionInfo: "",
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setSection(state, action) {
      // payload = newItem
      state.section = action.payload;
    },
    setSectionInfo(state, action) {
      // payload = newItem
      state.sectionInfo = action.payload;
    },
  },
});

export const { setSection, setSectionInfo } = sectionSlice.actions;

export default sectionSlice.reducer;
