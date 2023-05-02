import React from "react";

const SearchBar = () => {
  return (
    <input
      className=" ring-2 focus:ring-[#ff5171] outline-none w-screen ml-7 md:w-[94%] md:ml-[3%] h-8 my-2"
      type="text"
      placeholder="Search by name, email, or role"
    ></input>
  );
};
export default SearchBar;
