import React from "react";
import { usePagination } from "./hooks/usePagination";
import PageButton from "./UI/PageButton";

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
      <PageButton
        onClick={showFirst}
        disabled={currentPage === 1}
        symbol="&#x226A;"
      />
      <PageButton
        onClick={showPrevious}
        disabled={currentPage === 1}
        symbol="&#x226A;"
      />
      {paginationSpan.map((pageNumber) => {
        // Render our numbered buttons
        return (
          <PageButton
            onClick={() => onPageChange(pageNumber)}
            symbol={pageNumber}
            selected={currentPage === pageNumber}
          />
        );
      })}
      <PageButton
        onClick={showNext}
        disabled={currentPage === lastPage}
        symbol="&#x3c;"
      />
      <PageButton
        onClick={showLast}
        disabled={currentPage === lastPage}
        symbol="&#x226B;"
      />
    </ul>
  );
};

export default Pagination;
