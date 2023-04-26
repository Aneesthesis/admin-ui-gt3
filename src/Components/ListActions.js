import React from "react";
import DeleteIcon from "../UI/DeleteIcon";
import EditIcon from "../UI/EditIcon";

const ListActions = () => {
  return (
    <div className="flex justify-around">
      <span>
        <EditIcon />
      </span>
      <span>
        <DeleteIcon />
      </span>
    </div>
  );
};
export default ListActions;
