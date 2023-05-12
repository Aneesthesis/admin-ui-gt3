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
      let users = action.payload;

      users = users.map((user) => {
        return { ...user, key: user.id, checked: false };
      });

      state.users = users;
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
    toggleChecked(state, action) {
      const selected = state.selectedUsers;
      const selectedUserIds = selected.map((user) => user.id);

      state.users.forEach((user) => {
        const isSelected = selectedUserIds.indexOf(user.id);
        if (isSelected > -1) {
          user.checked = true;
        }
      });
    },

    deleteSelected(state, action) {
      let users = state.users;
      const selectedUsersIds = state.selectedUsers.map((user) => user.id);

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
