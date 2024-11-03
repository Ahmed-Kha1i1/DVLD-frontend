import { useQuery } from "@tanstack/react-query";
import { peopleKeys } from "../People/peopleKeys";
import { getPersonByDriverId } from "../../Core/Services/ApiDrivers";
import { driverdetailTypes } from "../Drivers/driversKeys";

export default function useDriverPerson(driverId, retry = 3) {
  const {
    isLoading,
    error,
    data: person,
    refetch,
  } = useQuery({
    queryKey: peopleKeys.detail(driverdetailTypes.ID, driverId),
    queryFn: () => getPersonByDriverId(driverId),
    enabled: !!driverId,
    retry: retry,
  });

  return { isLoading, error, person, refetch };
}
