/* eslint-disable react/prop-types */
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import PageButton from "./PageButton";
import PageMoveButton from "./PageMoveButton";

const maxPageButton = 5;
function PageSwitcher({ totalCount, pageSize, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalCount / pageSize);

  function getPageNumbers() {
    let pageNumbers = [];
    if (!totalPages) return [];

    if (totalPages <= maxPageButton) {
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pageNumbers.push(1);

      if (currentPage <= 2 || currentPage >= totalPages - 1) {
        pageNumbers.push(2, 3, "...", totalPages - 2, totalPages - 1);
      } else {
        pageNumbers.push(
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
        );
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  }

  function movePrev() {
    onPageChange(Math.max(1, currentPage - 1));
  }

  function moveNext() {
    onPageChange(Math.min(totalPages, currentPage + 1));
  }
  return (
    <div className="flex items-center gap-2 text-xl">
      <PageMoveButton
        icon={<MdArrowBackIosNew />}
        onClick={movePrev}
        disabled={currentPage === 1}
      />
      <div className="flex flex-wrap gap-2 rounded-full bg-gray-200 px-4 md:rounded-none">
        {getPageNumbers().map((page, index) => {
          return page === "..." ? (
            <span
              key={index}
              className="flex h-12 w-12 items-center justify-center text-2xl text-gray-500"
            >
              <span>...</span>
            </span>
          ) : (
            <PageButton
              key={index}
              onClick={() => onPageChange(page)}
              active={page === currentPage}
              number={page}
            />
          );
        })}
      </div>
      <PageMoveButton
        icon={<MdArrowForwardIos />}
        onClick={moveNext}
        disabled={currentPage >= totalPages}
      />
    </div>
  );
}

export default PageSwitcher;
