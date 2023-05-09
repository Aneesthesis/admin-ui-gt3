import React from "react";

const SelectItem = ({ onCheck, user }) => {
  return (
    <div>
      <input
        className="checkbox"
        type="checkbox"
        defaultChecked={true}
        onChange={() => onCheck(user)}
      />
    </div>
  );
};
export default SelectItem;
