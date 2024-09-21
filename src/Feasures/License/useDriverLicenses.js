import { useQuery } from "@tanstack/react-query";
import { GetDriverLicenses } from "../../Services/ApiDrivers";
import { driverLicensesQuery } from "../../Constants";

export default function useDriverLicenses(id) {
  const {
    isLoading,
    error,
    data: driverLicenses,
  } = useQuery({
    queryKey: [driverLicensesQuery, id],
    queryFn: () => GetDriverLicenses(id),
  });

  return { isLoading, error, driverLicenses };
}
