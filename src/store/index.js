import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users-slice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: { users: usersSlice.reducer, ui: uiSlice.reducer },
});

export default store;
