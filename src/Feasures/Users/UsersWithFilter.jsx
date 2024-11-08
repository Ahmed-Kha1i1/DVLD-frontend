import { useState } from "react";
import TableFooter from "../../Core/ui/TableFooter";
import UsersTableTop from "./UsersTableTop";
import UsersTable from "./UsersTable";
import useUsers from "./useUsers";
import { useSearchParams } from "react-router-dom";

function UsersWithFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultValues = {
    id: searchParams.get("id") || "",
    personId: searchParams.get("personId") || "",
    username: searchParams.get("username") || "",
    isActive: searchParams.get("isActive") || "",
    orderBy: searchParams.get("orderBy") || "Id",
    orderDirection: searchParams.get("orderDirection") || "Asc",
    searchQuery: searchParams.get("searchQuery") || "",
  };

  const defaultPageNumber = parseInt(searchParams.get("pageNumber") || "1", 10);

  const [filters, setFilters] = useState(defaultValues);
  const { error, users } = useUsers({
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
      <UsersTableTop onFilter={onFilter} defaultFilters={filters} />
      <UsersTable users={users} error={error} />
      <TableFooter
        totalCount={users?.metadata?.totalCount}
        currentPage={pageNumber}
        pageSize={users?.metadata?.pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default UsersWithFilter;
