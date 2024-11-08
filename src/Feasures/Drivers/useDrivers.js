import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getDrivers } from "../../Core/Services/ApiDrivers";
import { driversKeys } from "./driversKeys";

export default function useDrivers(filters) {
  const {
    isLoading,
    error,
    data: drivers,
  } = useQuery({
    queryKey: driversKeys.list(filters),
    queryFn: ({ signal }) => getDrivers(filters, signal),
    placeholderData: keepPreviousData,
  });

  return { isLoading, error, drivers };
}
