import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getDatainedLicenses } from "../../Core/Services/ApiDatainedLicenses";
import { detainedLicensesKeys } from "./detainedLicensesKeys";

export default function useDetainedLicenses(filters) {
  const {
    isLoading,
    error,
    data: detainedLicenses,
  } = useQuery({
    queryKey: detainedLicensesKeys.list(filters),
    queryFn: ({ signal }) => getDatainedLicenses(filters, signal),
    placeholderData: keepPreviousData,
  });

  return { isLoading, error, detainedLicenses };
}
