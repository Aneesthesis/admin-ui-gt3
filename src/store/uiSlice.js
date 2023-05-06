import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    searchIsOn: false,
    searchValid: true,
  },
  reducers: {
    setSearchOn(state) {
      state.searchIsOn = true;
    },
    setSearchOff(state) {
      state.searchIsOn = false;
      state.searchValid = true;
    },
    setSearchNotValid(state) {
      state.searchValid = false;
    },
    setSearchIsValid(state) {
      state.searchValid = true;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
