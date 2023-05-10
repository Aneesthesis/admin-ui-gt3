import React, { useState } from "react";

const EditUserForm = ({ userData }) => {
  const [enteredUserName, setEnteredUserName] = useState(userData.name);
  const [enteredUsernameIsValid, setEnteredusernameIsValid] = useState(false);
  const [userNameTouched, setUserNameTouched] = useState(false);

  const [enteredUserMail, setEnteredUserMail] = useState(userData.email);
  const [enteredMailIsValid, setEnteredMailIsValid] = useState(false);
  const [mailTouched, setMailTouched] = useState(false);

  const [enteredUserRole, setEnteredUserRole] = useState(userData.role);

  const nameInputValid = enteredUsernameIsValid && userNameTouched;
  const emailInputValid = enteredMailIsValid && mailTouched;

  const nameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredUserMail(e.target.value);
  };
  const roleChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredUserRole(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setUserNameTouched(true);
    setMailTouched(true);

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
    console.log({
      name: enteredUserName,
      email: enteredUserMail,
      role: enteredUserRole,
    });
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="bg-blue-50 border-2 border-white ring-1 ring-sky-300"
    >
      <h1 className="font-extrabold text-center py-4 ">Edit User</h1>
      <div className="flex justify-around gap-2">
        <div>
          <input
            id="name"
            placeholder="username"
            onChange={nameChangeHandler}
            value={enteredUserName}
          />
        </div>
        <div>
          <input
            id="email"
            placeholder="email"
            onChange={emailChangeHandler}
            value={enteredUserMail}
          />
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

      <div className="mx-auto my-6 px-2 w-fit bg-slate-400 text-white font-semibold">
        <button>Submit</button>
      </div>
    </form>
  );
};
export default EditUserForm;
