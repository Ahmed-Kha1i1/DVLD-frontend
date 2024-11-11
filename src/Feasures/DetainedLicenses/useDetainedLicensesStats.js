import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { detainedLicensesKeys } from "./detainedLicensesKeys";
import { GetDetainedLIcenesStats } from "../../Core/Services/ApiDatainedLicenses";

export default function useDetainedLicensesStats(
  startDate = null,
  endDate = null,
) {
  const {
    isLoading,
    error,
    data: detainedLicenses,
  } = useQuery({
    queryKey: detainedLicensesKeys.list({ startDate, endDate }),
    queryFn: () => GetDetainedLIcenesStats(startDate, endDate),
    placeholderData: keepPreviousData,
  });

  return { isLoading, error, detainedLicenses };
}
