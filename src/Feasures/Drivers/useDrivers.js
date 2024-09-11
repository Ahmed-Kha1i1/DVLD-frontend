import { useQuery } from "@tanstack/react-query";
import { getDrivers } from "../../Services/ApiDrivers";
import { driversQuery } from "../../Constants";

export default function useDrivers() {
  const {
    isLoading,
    error,
    data: Drivers
  } = useQuery({
    queryKey: [driversQuery],
    queryFn: getDrivers
  });

  return { isLoading, error, Drivers };
}
