import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";
import { usersActions } from "../store/users-slice";

const EditUserForm = ({ userData }) => {
  const [enteredUserName, setEnteredUserName] = useState(userData.name);
  const [enteredUsernameIsValid, setEnteredusernameIsValid] = useState(true);

  const [enteredUserMail, setEnteredUserMail] = useState(userData.email);
  const [enteredMailIsValid, setEnteredMailIsValid] = useState(true);

  const [enteredUserRole, setEnteredUserRole] = useState(userData.role);

  const dispatch = useDispatch();

  const nameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
    if (e.target.value.trim() !== "") {
      setEnteredusernameIsValid(true);
    }
  };
  const emailChangeHandler = (e) => {
    setEnteredUserMail(e.target.value);
    if (
      e.target.value.trim().includes("@") &&
      e.target.value.trim().includes(".com")
    ) {
      setEnteredMailIsValid(true);
    }
  };
  const roleChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredUserRole(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    if (enteredUserName.trim() == "") {
      setEnteredusernameIsValid(false);
    }
  };

  const emailInputBlurHandler = (e) => {
    if (
      !enteredUserMail.trim().includes("@") ||
      !enteredUserMail.trim().includes(".com")
    ) {
      setEnteredMailIsValid(false);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredUserName.trim() == "") {
      setEnteredusernameIsValid(false);
      return;
    }

    if (
      !enteredUserMail.trim().includes("@") ||
      !enteredUserMail.trim().includes(".com")
    ) {
      setEnteredMailIsValid(false);
      return;
    }
    const editedUserData = {
      name: enteredUserName,
      email: enteredUserMail,
      role: enteredUserRole,
    };
    dispatch(uiActions.setEditingOff());
    dispatch(usersActions.editUser(editedUserData));
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="bg-blue-50 border-2 border-white ring-1 ring-sky-300 ml-8 md:mx-auto mb-4 mt-2 md:mt-0"
    >
      <h1 className="font-extrabold text-center py-4 ">Edit User</h1>
      <div className="flex flex-col md:flex-row justify-around gap-2 items-center ">
        <div>
          <input
            id="name"
            placeholder="username"
            onChange={nameChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredUserName}
            className={`${
              !enteredUsernameIsValid && "ring-red-400 bg-red-300"
            } outline-none ring-2 rounded-md h-[30px] w-[200px] text-center`}
          />
          {!enteredUsernameIsValid && (
            <p className="text-red-500">Name cannot be blank</p>
          )}
        </div>
        <div>
          <input
            id="email"
            placeholder="email"
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredUserMail}
            className={`${
              !enteredMailIsValid && "ring-red-400 bg-red-300"
            } outline-none ring-2 rounded-md h-[30px] w-[200px] text-center `}
          />
          {!enteredMailIsValid && (
            <p className="text-red-500">E-mail format not correct</p>
          )}
        </div>
        <div onChange={roleChangeHandler} className="flex gap-4">
          <div>
            <input
              type="radio"
              id="admin"
              name="user_role"
              value="admin"
              defaultChecked={userData.role === "admin"}
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <div>
            <input
              type="radio"
              id="member"
              name="user_role"
              value="member"
              defaultChecked={userData.role === "member"}
            />
            <label htmlFor="member">Member</label>
          </div>
        </div>
      </div>

      <div className="mx-auto my-6 px-2 py-1 w-fit bg-slate-400 text-white font-semibold rounded-md active:bg-slate-300">
        <button>Submit</button>
      </div>
    </form>
  );
};
export default EditUserForm;
