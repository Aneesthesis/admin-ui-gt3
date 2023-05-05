import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    searchIsOn: false,
  },
  reducers: {
    setSearchOn(state) {
      state.searchIsOn = true;
    },
    setSearchOff(state) {
      state.searchIsOn = false;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
