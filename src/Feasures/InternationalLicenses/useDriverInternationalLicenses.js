import { useQuery } from "@tanstack/react-query";
import { GetDriverInternationalLicenses } from "../../Core/Services/ApiDrivers";
import { internationalLicensesKeys } from "./internationalLicensesKeys";

export default function useDriverInternationalLicenses(id) {
  const {
    isLoading,
    error,
    data: driverInternationalLicenses,
  } = useQuery({
    queryKey: internationalLicensesKeys.list({ driverId: id }),
    queryFn: () => GetDriverInternationalLicenses(id),
    enabled: !!id,
  });

  return { isLoading, error, driverInternationalLicenses };
}
