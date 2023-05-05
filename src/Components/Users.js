import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import ListActions from "./ListActions";
import SelectItem from "../UI/SelectItem";
import Pagination from "../pagination";

const displayCount = 10;

const Users = () => {
  const { users, searchedUsers } = useSelector((state) => state.users);
  const { searchIsOn } = useSelector((state) => state.ui);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(currentPage, users);

  let data = users;

  //rendering only search results when search is on
  if (searchIsOn && searchedUsers.length > 0) {
    data = searchedUsers;
  }

  const activeTableData = useMemo(() => {
    const firstIndexInActiveTable = (currentPage - 1) * displayCount;
    const lastIndexInActiveTable = firstIndexInActiveTable + displayCount;
    console.log(firstIndexInActiveTable, lastIndexInActiveTable);

    return data.slice(firstIndexInActiveTable, lastIndexInActiveTable);
  }, [currentPage, data, searchIsOn]);

  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="text-justify">
            <th>Select</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {activeTableData.map((user) => {
            return (
              <tr>
                <td>
                  <SelectItem />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <ListActions />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalCount={users.length}
        displayCount={displayCount}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default Users;
