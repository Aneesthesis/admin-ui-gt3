import React from "react";
import DeleteIcon from "../UI/DeleteIcon";
import EditIcon from "../UI/EditIcon";

const ListActions = ({ user, onDelete, onEdit }) => {
  return (
    <div className="flex justify-around">
      <button>
        <EditIcon />
      </button>
      <button onClick={onDelete.bind(user)}>
        <DeleteIcon />
      </button>
    </div>
  );
};
export default ListActions;
