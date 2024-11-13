import { useState } from "react";
import TableFooter from "../../Core/ui/TableFooter";
import DetainedLicensesTableTop from "./DetainedLicensesTableTop";
import DetainedLicensesTable from "./DetainedLicensesTable";
import useDetainedLicenses from "./useDetainedLicenses";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../Core/ui/Spinner";

function DetainedLicensesWithFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultValues = {
    id: searchParams.get("id") || "",
    nationalNumber: searchParams.get("nationalNumber") || "",
    isReleased: searchParams.get("isReleased") || "",
    orderBy: searchParams.get("orderBy") || "Id",
    orderDirection: searchParams.get("OrderDirection") || "Asc",
    searchQuery: searchParams.get("searchQuery") || "",
  };

  const defaultPageNumber = parseInt(searchParams.get("pageNumber") || "1", 10);

  const [filters, setFilters] = useState(defaultValues);
  const { isLoading, detainedLicenses } = useDetainedLicenses({
    ...filters,
    pageNumber: defaultPageNumber,
  });
  const [pageNumber, setPageNumber] = useState(defaultPageNumber);

  function onFilter(values) {
    setPageNumber(1);
    setFilters({ ...values, pageNumber: 1 });
  }

  function onPageChange(page) {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev),
      pageNumber: page,
    }));

    setPageNumber(page);
    setFilters({ ...filters, pageNumber: page });
  }

  return (
    <div>
      <DetainedLicensesTableTop onFilter={onFilter} defaultFilters={filters} />
      {isLoading ? (
        <Spinner />
      ) : (
        <DetainedLicensesTable detainedLicenses={detainedLicenses} />
      )}
      <TableFooter
        totalCount={detainedLicenses?.metadata?.totalCount}
        currentPage={pageNumber}
        pageSize={detainedLicenses?.metadata?.pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default DetainedLicensesWithFilter;
