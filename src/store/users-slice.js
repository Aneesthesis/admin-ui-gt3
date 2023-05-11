const { createSlice } = require("@reduxjs/toolkit");

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    // searchedUsers: [],
    selectedUsers: [],
    editedUser: {},
    // filteredUsers: [],
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
      //state.searchedUsers = matchedResults;
      state.users = matchedResults;
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
    deleteSelected(state, action) {
      //console.log(state.filteredUsers.length);
      let users = state.users;
      //const filteredUsers = state.filteredUsers;

      //if (!filteredUsers.length === 0) users = filteredUsers;

      const selectedUsersIds = state.selectedUsers.map((user) => user.id);

      console.log(selectedUsersIds);

      const filteredArr = users.filter(
        (user) => selectedUsersIds.indexOf(user.id) == -1
      );
      state.users = filteredArr;
      state.selectedUsers = [];
    },
    setEditedUser(state, action) {
      const user = action.payload;
      state.editedUser = user;
      console.log(user);
    },
    editUser(state, action) {
      const editedUserData = action.payload;
      const index = state.users
        .map((user) => user.id)
        .indexOf(state.editedUser.id);
      const user = state.users[index];

      user.name = editedUserData.name
        .trim()
        .split(" ", 3)
        .map((part) =>
          part.slice(0, 1).toUpperCase().concat(part.slice(1).toLowerCase())
        )
        .join(" ");

      user.email = editedUserData.email.trim().toLowerCase();

      user.role = editedUserData.role;

      state.editedUser = {};
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice;
