import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../store/users-slice";
import { uiActions } from "../store/uiSlice";
import { fetchUsers } from "../store/users-action";

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");
  const { searchValid } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const string = e.target.value;
    if (string.trim().length === 0) {
      dispatch(uiActions.setSearchOff());
      dispatch(fetchUsers());
    }
    console.log(string);
    setSearchString(string);
  };

  const activateSearchHandler = (e) => {
    e.preventDefault();
    if (searchString.trim().length === 0) {
      // dispatch(uiActions.setSearchNotValid());
      // dispatch(uiActions.setSearchOn());
      return;
    }
    dispatch(uiActions.setSearchOn());
    dispatch(usersActions.searchUsers(searchString));
  };

  return (
    <form onSubmit={activateSearchHandler}>
      <input
        disabled={!searchValid}
        className={`${
          !searchValid ? "ring-[#ff5171]" : "ring-sky-500"
        } ring-2 focus:ring-[3px] outline-none w-[80%] ml-7 md:w-[94%] md:ml-[3%] h-8 my-2`}
        type="text"
        placeholder="Search by name, email, or role."
        onChange={inputChangeHandler}
        value={searchString}
      ></input>
      <button className="md:invisible absolute w-fit text-white font-semibold top-2 -right-[12px] bg-[#f8312f] ring-1 active:font-bold ring-rose-600 px-1 py-1">
        Search
      </button>
    </form>
  );
};
export default SearchBar;
