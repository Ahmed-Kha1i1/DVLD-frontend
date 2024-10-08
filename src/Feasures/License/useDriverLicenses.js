import { useQuery } from "@tanstack/react-query";
import { GetDriverLicenses } from "../../Core/Services/ApiDrivers";
import { licensesKeys } from "./licensesKeys";

export default function useDriverLicenses(id) {
  const {
    isLoading,
    error,
    data: driverLicenses,
  } = useQuery({
    queryKey: licensesKeys.lists(),
    queryFn: () => GetDriverLicenses(id),
  });

  return { isLoading, error, driverLicenses };
}
