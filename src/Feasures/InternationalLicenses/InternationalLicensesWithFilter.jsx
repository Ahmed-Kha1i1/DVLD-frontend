import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TableFooter from "../../Core/ui/TableFooter";
import InternationalLicensesTableTop from "./InternationalLicensesTableTop";
import InternationalLicensesTable from "./InternationalLicensesTable";
import useInternationalLicenses from "./useInternationalLicenses";

function InternationalLicensesWithFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultValues = {
    id: searchParams.get("id") || "",
    driverId: searchParams.get("driverId") || "",
    licenseId: searchParams.get("licenseId") || "",
    isActive: searchParams.get("isActive") || "",
    orderBy: searchParams.get("orderBy") || "Id",
    orderDirection: searchParams.get("orderDirection") || "Asc",
  };

  const defaultPageNumber = parseInt(searchParams.get("pageNumber") || "1", 10);

  const [filters, setFilters] = useState(defaultValues);
  const { error, internationalLicenses } = useInternationalLicenses({
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
      <InternationalLicensesTableTop
        onFilter={onFilter}
        defaultFilters={filters}
      />
      <InternationalLicensesTable
        internationalLicenses={internationalLicenses}
        error={error}
      />
      <TableFooter
        totalCount={internationalLicenses?.metadata?.totalCount}
        currentPage={pageNumber}
        pageSize={internationalLicenses?.metadata?.pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default InternationalLicensesWithFilter;
