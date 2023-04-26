import React from "react";
import ListActions from "./ListActions";
import SelectItem from "../UI/SelectItem";

const User = ({ user }) => {
  return (
    <div className="relative flex pb-2 border-b border-gray-200 mb-4">
      <section className=" flex absolute ml-[5%]">
        <SelectItem />
      </section>

      <section className="flex absolute ml-[20%]">
        <span>{user.name}</span>
      </section>
      <section className="flex absolute ml-[40%]">
        <span>{user.email}</span>
      </section>
      <section className="flex absolute ml-[70%]">
        <span>{user.role}</span>
      </section>
      <section className="ml-[90%]">
        <ListActions />
      </section>
    </div>
  );
};
export default User;
