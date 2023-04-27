import React from "react";
import DeleteIcon from "../UI/DeleteIcon";
import EditIcon from "../UI/EditIcon";

const ListActions = () => {
  return (
    <div className="flex justify-around">
      <button>
        <EditIcon />
      </button>
      <button>
        <DeleteIcon />
      </button>
    </div>
  );
};
export default ListActions;
