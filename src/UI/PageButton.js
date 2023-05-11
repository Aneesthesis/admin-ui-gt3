import React from "react";

const PageButton = ({ onClick, disabled, symbol, selected }) => {
  return (
    <li
      onClick={() => onClick()}
      className={`${selected && "bg-white"} ${selected && "text-[#1890ff]"} 
      } bg-[#1890ff] h-6 w-6 rounded-[50%] text-center text-white ring-1 ring-[#1890ff] ${
        disabled && "ring-[#e4e4e4]"
      } ${disabled && "text-gray-600"} ${disabled && "bg-gray-400"}`}
    >
      <button disabled={disabled}>{symbol}</button>
    </li>
  );
};

export default PageButton;
