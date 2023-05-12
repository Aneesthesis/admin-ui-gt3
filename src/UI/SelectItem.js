import React from "react";

const SelectItem = ({ onCheck, user, disabled, checked }) => {
  return (
    <div>
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => onCheck(user)}
        disabled={disabled}
        checked={checked}
      />
    </div>
  );
};
export default SelectItem;
