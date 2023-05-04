const { createSlice } = require("@reduxjs/toolkit");

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
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
        (user) => user.role.toLowerCase() === searchString
      );
      console.log(matchedResults);
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice;
