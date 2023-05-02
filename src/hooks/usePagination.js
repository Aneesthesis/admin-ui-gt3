const range = (start, end) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, i) => i + start);
};

export const usePagination = ({
  totalCount, //total no. of elements provided
  diplayCount, //no of elements to be shown in a single page
  adjacentPagesCount, //neighbouring pages of current page
  currentPage, //page on screen
}) => {
  const paginationSpan = useMemo(() => {
    const totalNoOfPages = Math.ceil(totalCount / diplayCount);

    const noOfpagesDisplayedInNavigationBar = adjacentPagesCount + 5;

    if (noOfpagesDisplayedInNavigationBar >= totalNoOfPages) {
      return range(1, totalNoOfPages);
    }

    const leftSideIndex = Math.max(currentPage - adjacentPagesCount, 1);
    const rightSideIndex = Math.min(
      currentPage + adjacentPagesCount,
      totalNoOfPages
    );

    const showLeftDots = leftSideIndex > 2;
    const showRightDots = rightSideIndex < totalNoOfPages - 2;
  }, [totalCount, diplayCount, adjacentPagesCount, currentPage]);

  return paginationSpan;
};
