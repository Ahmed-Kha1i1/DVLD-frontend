import { useQuery } from "@tanstack/react-query";
import { getDriver } from "../../Core/Services/ApiDrivers";
import { driverdetailTypes, driversKeys } from "./driversKeys";

export default function useDriver(
  identifier,
  type = driverdetailTypes.ID,
  retry = 3,
) {
  const {
    isLoading,
    error,
    data: driver,
  } = useQuery({
    queryKey: driversKeys.detail(type, identifier),
    queryFn: () => getDriver(identifier, type),
    retry: retry,
    enabled: !!identifier,
  });

  return { isLoading, error, driver };
}
