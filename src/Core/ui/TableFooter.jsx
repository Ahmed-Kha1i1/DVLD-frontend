/* eslint-disable react/prop-types */
import PageSwitcher from "./PageSwitcher";

function TableFooter({ totalCount, pageSize, currentPage, onPageChange }) {
  const PageNumber = Number(currentPage);
  const endItem = Math.min(PageNumber * pageSize, totalCount);
  const startItem = endItem === 0 ? 0 : (PageNumber - 1) * pageSize + 1;

  return (
    <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
      <div className="text-lg text-gray-600">
        Showing {startItem} - {endItem} of {totalCount} results
      </div>
      <PageSwitcher
        totalCount={totalCount}
        currentPage={PageNumber}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default TableFooter;
