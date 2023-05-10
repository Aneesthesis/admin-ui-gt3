import React, { useState } from "react";

const EditUserForm = ({ userData }) => {
  const [userName, setUserName] = useState(userData.name);
  const [userMail, setUserMail] = useState(userData.email);
  const [userRole, setUserRole] = useState(userData.role);

  return (
    <form>
      <h1>Edit User</h1>
      <div>
        <input
          placeholder="username"
          onChange={nameChangeHandler}
          value={userName}
        />
        <input
          placeholder="email"
          onChange={emailChangeHandler}
          value={userMail}
        />
        <input
          placeholder="role"
          onChange={roleChangeHandler}
          value={userRole}
        />
      </div>
    </form>
  );
};
export default EditUserForm;
