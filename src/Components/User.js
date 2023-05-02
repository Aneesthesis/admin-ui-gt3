import React from "react";
import ListActions from "./ListActions";
import SelectItem from "../UI/SelectItem";

const User = ({ user }) => {
  return (
    <tr className="flex justify-between w-full">
      <td>
        <SelectItem />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <ListActions />
      </td>
    </tr>
  );
};
export default User;
