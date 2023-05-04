import { useMemo } from "react";

const range = (start, end) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, i) => i + start);
};

export const usePagination = ({
  totalCount, //total no. of elements provided
  displayCount, //no of elements to be shown in a single page
  currentPage, //page on screen
}) => {
  console.log(totalCount, displayCount, currentPage);
  const paginationSpan = useMemo(() => {
    const totalNoOfPages = Math.ceil(totalCount / displayCount);
    return range(1, totalNoOfPages);
  }, [totalCount, displayCount, currentPage]);

  return paginationSpan;
};
