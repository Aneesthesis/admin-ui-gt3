import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListActions from "./ListActions";
import SelectItem from "../UI/SelectItem";
import Pagination from "../pagination";
import FailedSearchMessage from "../UI/FailedSearchMessage";
import { uiActions } from "../store/uiSlice";
import { usersActions } from "../store/users-slice";
import EditUserForm from "../UI/EditUserForm";

const displayCount = 10;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const Users = () => {
  const { users, selectedUsers, editedUser } = useSelector(
    (state) => state.users
  );
  const { searchIsOn, searchValid, editingUser } = useSelector(
    (state) => state.ui
  );
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  console.log(currentPage, users);

  let data = users;

  if (searchIsOn && users.length === 0) {
    dispatch(uiActions.setSearchNotValid());
  }

  const activeTableData = useMemo(() => {
    const firstIndexInActiveTable = (currentPage - 1) * displayCount;
    const lastIndexInActiveTable = firstIndexInActiveTable + displayCount;
    console.log(firstIndexInActiveTable, lastIndexInActiveTable);

    return data.slice(firstIndexInActiveTable, lastIndexInActiveTable);
  }, [currentPage, data, searchIsOn]);

  const deleteUserHandler = (user) => {
    dispatch(usersActions.deleteUser(user));
  };

  const editUserHandler = (user) => {
    dispatch(uiActions.setEditingOn());
    dispatch(usersActions.setEditedUser(user));
    scrollToTop();
  };

  const checkUserHandler = (user) => {
    dispatch(usersActions.selectUser(user));
    dispatch(usersActions.checkSelected());
  };

  const deleteSelectedHandler = () => {
    dispatch(usersActions.deleteSelected());
  };
  return (
    <>
      {searchIsOn && !searchValid && <FailedSearchMessage />}
      {editingUser && (
        <EditUserForm
          userData={{
            key: editedUser.id,
            id: editedUser.id,
            name: editedUser.name,
            email: editedUser.email,
            role: editedUser.role,
            checked: editedUser.checked,
          }}
        />
      )}
      <table className="w-full">
        <thead>
          <tr className="text-justify">
            <th>Select</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-xs md:text-base ">
          {activeTableData.map((user) => {
            return (
              <>
                <tr class="spacer h-[1px]  bg-gray-800"></tr>
                <tr
                  className={`${
                    selectedUsers
                      .map((user) => user.id)
                      .some((id) => id === user.id) && "bg-gray-300"
                  } ${
                    user.id === editedUser.id && editingUser && "text-gray-400"
                  }`}
                >
                  <td>
                    <SelectItem
                      onCheck={checkUserHandler}
                      user={user}
                      disabled={editingUser}
                      checked={user.checked}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <ListActions
                      user={user}
                      onDelete={deleteUserHandler}
                      onEdit={editUserHandler}
                      disabled={selectedUsers.length > 0 || editingUser} //disabling operation on individual rows when multiple rows selected
                    />
                  </td>
                </tr>
                <tr class="spacer h-[1px] bg-gray-800"></tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-col md:flex-row relative justify-between mt-4 mb-8">
        <button
          onClick={deleteSelectedHandler}
          className={`md:absolute ml-[30%] md:mx-auto my-5 md:my-0 w-fit bg-rose-500 py-1 px-3 rounded-full text-white ${
            selectedUsers.length === 0 ? "hidden" : "block"
          } "`}
        >
          Deleted Selected
        </button>
        <div className="w-[90%] md:w-[50%] ml-[7%] md:mx-auto">
          {searchValid && data.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalCount={data.length}
              displayCount={displayCount}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Users;

//edit
