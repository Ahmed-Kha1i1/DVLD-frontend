import { useState } from "react";
import TableFooter from "../../Core/ui/TableFooter";
import PeopleTableTop from "./PeopleTableTop";
import PeopleTable from "./PeopleTable";
import usePeople from "./usePeople";
import { useSearchParams } from "react-router-dom";

function PeopleWithFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultValues = {
    id: searchParams.get("id") || "",
    nationalNumber: searchParams.get("nationalNumber") || "",
    gender: searchParams.get("gender") || "",
    orderBy: searchParams.get("orderBy") || "Id",
    orderDirection: searchParams.get("orderDirection") || "Asc",
    searchQuery: searchParams.get("searchQuery") || "",
  };

  const defaultPageNumber = parseInt(searchParams.get("pageNumber") || "1", 10);

  const [filters, setFilters] = useState(defaultValues);
  const { error, people } = usePeople({
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
      <PeopleTableTop onFilter={onFilter} defaultFilters={filters} />
      <PeopleTable people={people} error={error} />
      <TableFooter
        totalCount={people?.metadata?.totalCount}
        currentPage={pageNumber}
        pageSize={people?.metadata?.pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default PeopleWithFilter;
