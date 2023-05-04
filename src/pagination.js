import React from "react";
import { usePagination } from "./hooks/usePagination";

const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  displayCount,
}) => {
  const paginationSpan = usePagination({
    totalCount,
    displayCount,
    currentPage,
  });

  //no pagination component rendered if less than 2 pages to display.
  if (!currentPage > 0 || !paginationSpan.length > 2) {
    return null;
  }
  let lastPage = paginationSpan[paginationSpan.length - 1];

  console.log(paginationSpan);

  const showNext = () => {
    onPageChange(currentPage + 1);
  };

  const showPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const showFirst = () => {
    onPageChange(1);
  };
  const showLast = () => {
    onPageChange(lastPage);
  };

  return (
    <ul className="flex justify-around">
      {/*go the first page */}
      <li onClick={showFirst}>
        <button>&#60;&#60;</button>
      </li>
      {/*go the prev page */}
      <li onClick={showPrevious}>
        <button disabled={currentPage === 1}>&#60;</button>
      </li>

      {/*go to next page */}
      <li onClick={showNext}>
        <button disabled={currentPage === lastPage}>&#62;</button>
      </li>
      {/*go the last page */}
      <li onClick={showLast}>
        <button>&#62;&#62;</button>
      </li>
    </ul>
  );
};

export default Pagination;
