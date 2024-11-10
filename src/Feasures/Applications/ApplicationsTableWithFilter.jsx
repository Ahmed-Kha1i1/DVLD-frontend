import { useState } from "react";
import TableFooter from "../../Core/ui/TableFooter";
import ApplicationsTableTop from "./ApplicationsTableTop";
import ApplicationsTable from "./ApplicationsTable ";
import useApplications from "./useApplications";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../Core/ui/Spinner";

function ApplicationsTableWithFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultValues = {
    id: searchParams.get("id") || "",
    className: searchParams.get("className") || "",
    personId: searchParams.get("personId") || "",
    nationalNumber: searchParams.get("nationalNumber") || "",
    status: searchParams.get("status") || "",
    orderBy: searchParams.get("orderBy") || "Id",
    OrderDirection: searchParams.get("OrderDirection") || "Asc",
    searchQuery: searchParams.get("searchQuery") || "",
  };

  const defaultPageNumber = searchParams.get("pageNumber") || 1;

  const [filters, setFilters] = useState(defaultValues);
  const { isLoading, error, applications } = useApplications({
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
      <ApplicationsTableTop onFilter={onFilter} defaultFilters={filters} />
      {isLoading ? (
        <Spinner />
      ) : (
        <ApplicationsTable applications={applications} error={error} />
      )}
      <TableFooter
        totalCount={applications?.metadata?.totalCount}
        currentPage={pageNumber}
        pageSize={applications?.metadata?.pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ApplicationsTableWithFilter;
