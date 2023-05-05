import React from "react";

const FailedSearchMessage = () => {
  return (
    <>
      <div className="absolute z-10">
        <header>No users found!</header>
        <p>Try searching with a different name, email, or role</p>
      </div>
    </>
  );
};

export default FailedSearchMessage;
