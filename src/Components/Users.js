import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const Users = () => {
  const { users } = useSelector((state) => state.users);
  return (
    <table className="mx-auto w-full ">
      <tr className="flex justify-between">
        <th>Select</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
      <tr className="">
        <td>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </td>
      </tr>
    </table>
  );
};

export default Users;
