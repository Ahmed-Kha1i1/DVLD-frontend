import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getStatistics } from "../../Core/Services/ApiStatistics";
import { statisticsKeys } from "./statisticsKeys";

export default function useStatistics(startDate = null, endDate = null) {
  const {
    isLoading,
    error,
    data: statistics,
  } = useQuery({
    queryKey: statisticsKeys.detail({ startDate, endDate }),
    queryFn: () => getStatistics(startDate, endDate),
    placeholderData: keepPreviousData,
  });

  return { isLoading, error, statistics };
}
