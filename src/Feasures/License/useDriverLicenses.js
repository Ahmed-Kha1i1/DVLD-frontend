import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  GetDriverInternationalLicenses,
  GetDriverLicenses,
} from "../../Core/Services/ApiDrivers";
import { licensesKeys } from "./licensesKeys";
import { internationalLicensesKeys } from "../InternationalLicenses/internationalLicensesKeys";

export default function useDriverLicenses(id) {
  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    data: driverLicenses,
  } = useQuery({
    queryKey: licensesKeys.list({ driverId: id }),
    queryFn: () => GetDriverLicenses(id),
    enabled: !!id,
  });

  //prefetch drivers international licenses
  queryClient.prefetchQuery({
    queryKey: internationalLicensesKeys.list({ id }),
    queryFn: () => GetDriverInternationalLicenses(id),
  });
  //

  return { isLoading, error, driverLicenses };
}
