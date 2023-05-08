import React from "react";

const SelectItem = ({ onCheck, user }) => {
  return (
    <div>
      <input type="checkbox" onChange={() => onCheck(user)} />
    </div>
  );
};
export default SelectItem;
