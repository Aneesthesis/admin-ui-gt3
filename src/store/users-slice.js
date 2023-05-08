const { createSlice } = require("@reduxjs/toolkit");

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    searchedUsers: [],
    selectedUsers: [],
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
    deleteUser(state, action) {
      const users = state.users;
      const del_user_Id = action.payload.id;
      const index = users.map((user) => user.id).indexOf(del_user_Id);

      users.splice(index, 1);
      //replacing state.users after deletion
      state.users = users;
    },
    selectUser(state, action) {
      const selectedUser = action.payload;

      const existingUser = state.selectedUsers.find(
        (user) => user.id === selectedUser.id
      );

      if (existingUser) {
        const existingUserIndex = state.selectedUsers
          .map((user) => user.id)
          .indexOf(existingUser.id);

        state.selectedUsers.splice(existingUserIndex, 1);
      }
      if (!existingUser) {
        state.selectedUsers.push(selectedUser);
      }
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice;
