import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getInternationalLicenses } from "../../Core/Services/ApiInternationalLicenses";
import { internationalLicensesKeys } from "./internationalLicensesKeys";

export default function useInternationalLicenses(filters) {
  const {
    isLoading,
    error,
    data: internationalLicenses,
  } = useQuery({
    queryKey: internationalLicensesKeys.list(filters),
    queryFn: ({ signal }) => getInternationalLicenses(filters, signal),
    placeholderData: keepPreviousData,
  });

  return { isLoading, error, internationalLicenses };
}
