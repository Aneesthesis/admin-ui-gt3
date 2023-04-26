import React from "react";
import { useSelector } from "react-redux";
import User from "./User";
import ListHeaders from "./ListHeaders";

const Users = () => {
  const { users } = useSelector((state) => state.users);
  return (
    <div className="absolute top-20 w-[90%] ml-[4%]">
      <ListHeaders />

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
