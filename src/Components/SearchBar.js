import React from "react";

const SearchBar = () => {
  return (
    <div className="relative mx-auto my-10 w-[90%]">
      <input
        className="absolute w-[100%] ring-2 focus:ring-[#ff5171] outline-none"
        type="text"
        placeholder="Search by name, email, or role"
      ></input>
    </div>
  );
};
export default SearchBar;
