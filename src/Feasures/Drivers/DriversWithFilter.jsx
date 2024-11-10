import { useState } from "react";
import TableFooter from "../../Core/ui/TableFooter";
import DriversTableTop from "./DriversTableTop";
import DriversTable from "./DriversTable";
import useDrivers from "./useDrivers";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../Core/ui/Spinner";

function DriversWithFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultValues = {
    id: searchParams.get("id") || "",
    personId: searchParams.get("personId") || "",
    nationalNumber: searchParams.get("nationalNumber") || "",
    orderBy: searchParams.get("orderBy") || "Id",
    orderDirection: searchParams.get("orderDirection") || "Asc",
    searchQuery: searchParams.get("searchQuery") || "",
  };

  const defaultPageNumber = parseInt(searchParams.get("pageNumber") || "1", 10);

  const [filters, setFilters] = useState(defaultValues);
  const { isLoading, error, drivers } = useDrivers({
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
      <DriversTableTop onFilter={onFilter} defaultFilters={filters} />
      {isLoading ? (
        <Spinner />
      ) : (
        <DriversTable drivers={drivers} error={error} />
      )}
      <TableFooter
        totalCount={drivers?.metadata?.totalCount}
        currentPage={pageNumber}
        pageSize={drivers?.metadata?.pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default DriversWithFilter;
