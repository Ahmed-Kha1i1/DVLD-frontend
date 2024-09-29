import { useQuery } from "@tanstack/react-query";
import { GetDriverInternationalLicenses } from "../../Core/Services/ApiDrivers";
import { driverInternationalLicensesQuery } from "../../Constants";

export default function useDriverInternationalLicenses(id) {
  const {
    isLoading,
    error,
    data: driverInternationalLicenses,
  } = useQuery({
    queryKey: [driverInternationalLicensesQuery, id],
    queryFn: () => GetDriverInternationalLicenses(id),
  });

  return { isLoading, error, driverInternationalLicenses };
}
