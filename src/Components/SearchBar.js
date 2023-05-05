import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { usersActions } from "../store/users-slice";
import { uiActions } from "../store/uiSlice";

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const string = e.target.value;
    if (string.length === 0) {
      dispatch(uiActions.setSearchOff());
    }
    console.log(string);
    setSearchString(string);
  };

  const activateSearchHandler = (e) => {
    e.preventDefault();
    if (searchString.trim().length === 0) {
      return;
    }
    dispatch(uiActions.setSearchOn());
    dispatch(usersActions.searchUsers(searchString));
  };

  return (
    <form onSubmit={activateSearchHandler}>
      <input
        className=" ring-2 focus:ring-[#ff5171] outline-none w-screen ml-7 md:w-[94%] md:ml-[3%] h-8 my-2"
        type="text"
        placeholder="Search by name, email, or role"
        onChange={inputChangeHandler}
        value={searchString}
      ></input>
    </form>
  );
};
export default SearchBar;
