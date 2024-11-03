import { useQuery } from "@tanstack/react-query";
import { getTestAppointment } from "../../Core/Services/ApiTestApointments";
import {
  testAppointmentsKeys,
  testAppointmentdetailTypes,
} from "./testAppointmentsKeys";

export default function useTestAppointment(id, enabled = true) {
  const {
    isLoading,
    error,
    data: testAppointment,
  } = useQuery({
    queryKey: testAppointmentsKeys.detail(testAppointmentdetailTypes.ID, id),
    queryFn: () => getTestAppointment(id),
    enabled: !!id && enabled,
  });

  return { isLoading, error, testAppointment };
}
