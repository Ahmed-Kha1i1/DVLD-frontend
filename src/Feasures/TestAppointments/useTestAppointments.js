import { useQuery } from "@tanstack/react-query";
import { getTestAppointments } from "../../Core/Services/ApiTestApointments";
import { testAppointmentsKeys } from "./testAppointmentsKeys";

export default function useTestAppointments(localApplicationId, testTypeId) {
  const {
    isLoading,
    error,
    data: testAppointments,
  } = useQuery({
    queryKey: testAppointmentsKeys.list({ localApplicationId, testTypeId }),
    queryFn: () => getTestAppointments(localApplicationId, testTypeId),
  });

  return { isLoading, error, testAppointments };
}
