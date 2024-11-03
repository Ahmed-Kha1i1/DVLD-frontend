import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import toast from "react-hot-toast";
import { testAppointmentsKeys } from "./testAppointmentsKeys";
import { updateTestAppointment } from "../../Core/Services/ApiTestApointments";

export default function useUpdateTestAppointment() {
  const queryClient = useQueryClient();
  const ref = useRef();

  function onSuccess() {
    toast.success("Test appointment successfully updated!");

    queryClient.setQueriesData(
      { queryKey: testAppointmentsKeys.lists() },
      (previous) =>
        previous.map((testAppointment) =>
          testAppointment?.testAppointmentId === ref.current.testAppointmentId
            ? {
                ...testAppointment,
                appointmentDate: ref.current.appointmentDate,
              }
            : testAppointment,
        ),
    );

    queryClient.setQueriesData(
      { queryKey: testAppointmentsKeys.details() },
      (testAppointment) =>
        testAppointment?.testAppointmentId === ref.current.testAppointmentId
          ? {
              ...testAppointment,
              appointmentDate: ref.current.appointmentDate,
            }
          : testAppointment,
    );
  }
  const { mutate: UpdateTestAppointment, isPending: isUpdating } = useMutation({
    mutationFn: ({ testAppointmentId, appointmentDate }) => {
      ref.current = { appointmentDate, testAppointmentId };
      return updateTestAppointment({ appointmentDate, testAppointmentId });
    },

    onSuccess: onSuccess,
  });

  return { isUpdating, UpdateTestAppointment };
}
