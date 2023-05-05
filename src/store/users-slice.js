const { createSlice } = require("@reduxjs/toolkit");

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    searchedUsers: [],
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
      console.log(state.users);
    },
    searchUsers(state, action) {
      const searchString = action.payload.trim().toLowerCase();
      console.log(searchString);
      const allUsers = state.users;
      const matchedResults = allUsers.filter(
        (user) =>
          user.role.toLowerCase().includes(searchString) ||
          user.email.toLowerCase().includes(searchString) ||
          user.name.toLowerCase().includes(searchString)
      );
      state.searchedUsers = matchedResults;
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice;
