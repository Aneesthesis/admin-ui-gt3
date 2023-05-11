import React from "react";

const SelectItem = ({ onCheck, user, disabled }) => {
  return (
    <div>
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => onCheck(user)}
        disabled={disabled}
      />
    </div>
  );
};
export default SelectItem;
