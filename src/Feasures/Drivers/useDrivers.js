import { useQuery } from "@tanstack/react-query";
import { getDrivers } from "../../Core/Services/ApiDrivers";
import { driversKeys } from "./driversKeys";

export default function useDrivers() {
  const {
    isLoading,
    error,
    data: Drivers,
  } = useQuery({
    queryKey: driversKeys.lists(),
    queryFn: getDrivers,
  });

  return { isLoading, error, Drivers };
}
