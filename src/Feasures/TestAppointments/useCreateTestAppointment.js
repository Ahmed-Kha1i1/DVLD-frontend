import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { testAppointmentsKeys } from "./testAppointmentsKeys";
import { addNewTestAppointment } from "../../Core/Services/ApiTestApointments";
import { useRef } from "react";

export default function useCreateTestAppointment() {
  const queryClient = useQueryClient();
  const ref = useRef();

  function onSuccess() {
    toast.success("Test appointment successfully created!");
    queryClient.invalidateQueries({
      queryKey: testAppointmentsKeys.list({
        localApplicationId: ref.current.localApplicationId,
        testTypeId: ref.current.testTypeId,
      }),
    });
  }

  const { mutate: CreateTestAppointment, isPending: isCreating } = useMutation({
    mutationFn: ({ localApplicationId, testTypeId, appointmentDate }) => {
      ref.current = { localApplicationId, testTypeId, appointmentDate };
      return addNewTestAppointment({
        localApplicationId,
        testTypeId,
        appointmentDate,
      });
    },
    onSuccess: onSuccess,
  });

  return { isCreating, CreateTestAppointment };
}
