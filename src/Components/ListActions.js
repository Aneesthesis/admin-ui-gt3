import React from "react";
import DeleteIcon from "../UI/DeleteIcon";
import EditIcon from "../UI/EditIcon";

const ListActions = ({ user, onDelete, onEdit, disabled }) => {
  return (
    <div className="flex justify-around">
      <button
        disabled={disabled}
        className={`${disabled && "cursor-not-allowed"}`}
      >
        <EditIcon />
      </button>
      <button
        onClick={() => {
          onDelete(user);
        }}
        disabled={disabled}
        className={`${disabled && "cursor-not-allowed"}`}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};
export default ListActions;
