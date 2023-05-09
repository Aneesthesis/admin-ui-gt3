import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";

const FailedSearchMessage = () => {
  const dispatch = useDispatch();
  const { searchValid } = useSelector((state) => state.ui);

  const closePopupHandler = (e) => {
    e.preventDefault();
    dispatch(uiActions.setSearchOff());
  };

  return (
    <>
      <div className="fixed top-[20%] left-3 md:left-[35%]  px-4 py-2 z-10 text-rose-500 bg-orange-50">
        <header className="font-bold text-center">No users found!</header>
        <p className="font-semibold">
          Try searching with a different name, email, or role
        </p>

        <div className="text-center bg-rose-500 text-yellow-50 w-fit mx-auto mt-4 px-2 py-1 rounded-md hover:ring-2 hover:ring-rose-600">
          <button onClick={closePopupHandler}>Okay!</button>
        </div>
      </div>
    </>
  );
};

export default FailedSearchMessage;
