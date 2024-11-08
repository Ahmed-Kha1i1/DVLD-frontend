import { useForm } from "react-hook-form";
import useCreateTestAppointment from "./useCreateTestAppointment";
import useUpdateTestAppointment from "./useUpdateTestAppointment";
import {
  doesPassPreviousTest,
  doesPassTestType,
  isThereAnActiveScheduledTest,
} from "../../Core/Services/ApiApplications";
import { useEffect, useState } from "react";

function useTestAppointmentForm(
  localApplicationId,
  testTypeId,
  testAppointmentId,
  setTestAppointmentId,
) {
  const { isCreating, CreateTestAppointment } = useCreateTestAppointment();
  const { isUpdating, UpdateTestAppointment } = useUpdateTestAppointment();
  const [fetchError, setFetchError] = useState("");
  const [isEditSession, setIsEditSession] = useState(
    Boolean(testAppointmentId),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function GetError() {
      try {
        if (!isEditSession) {
          if (
            await isThereAnActiveScheduledTest(localApplicationId, testTypeId)
          ) {
            throw new Error(
              "Person Already have an active appointment for this test, You cannot add new appointment",
            );
          } else if (
            !(await doesPassPreviousTest(localApplicationId, testTypeId))
          ) {
            throw new Error(
              "Cannot Sechule, Previous test should be passed first",
            );
          } else if (await doesPassTestType(localApplicationId, testTypeId)) {
            throw new Error(
              "This person already passed this test before, you can only retake faild test",
            );
          }
        }
      } catch (error) {
        setFetchError(error.message);
      }
    }
    GetError();
  }, []);

  async function OnSubmit({ appointmentDate }) {
    if (isEditSession) {
      UpdateTestAppointment({ testAppointmentId, appointmentDate });
    } else {
      CreateTestAppointment(
        {
          localApplicationId,
          testTypeId,
          appointmentDate,
        },
        {
          onSuccess: (testAppointmentId) => {
            setIsEditSession(true);
            setTestAppointmentId(testAppointmentId);
          },
        },
      );
    }
  }

  return {
    register,
    error: fetchError ? fetchError : errors?.appointmentDate?.message,
    handleSubmit: handleSubmit(OnSubmit),
    isLoading: isCreating || isUpdating,
    isEditSession,
  };
}

export default useTestAppointmentForm;
