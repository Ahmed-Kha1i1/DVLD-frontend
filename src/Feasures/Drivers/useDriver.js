import { useQuery } from "@tanstack/react-query";
import { getDriver } from "../../Services/ApiDrivers";

export default function useDriver(id) {
  const {
    isLoading,
    error,
    data: driver,
  } = useQuery({
    queryKey: ["driver", id],
    queryFn: () => getDriver(id),
  });

  return { isLoading, error, driver };
}
