import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    searchIsOn: false,
    searchValid: true,
    editingUser: false,
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
    setEditingOn(state) {
      state.editingUser = true;
    },
    setEditingOff(state) {
      state.editingUser = false;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
