/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import TestApointmentCard from "./TestApointmentCard";
import InlineInput from "../../Core/ui/InlineInput";
import SaveButton from "../../Core/ui/SaveButton";
import PageTitle from "../../Core/ui/PageTitle";
import { GetTestTypeName } from "../../Core/Utils/helpers";
import useTestAppointment from "./useTestAppointment";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";
import InputError from "../../Core/ui/InputError";
import { useState } from "react";
import useTestAppointmentForm from "./useTestAppointmentForm";
function SechduleTest({
  testTypeId,
  testAppointmentId: currentTestAppointmentId,
}) {
  const { id: localApplicationId } = useParams();
  const today = new Date().toISOString().split("T")[0];
  const [testAppointmentId, setTestAppointmentId] = useState(
    currentTestAppointmentId,
  );
  const { register, error, handleSubmit, isEditSession } =
    useTestAppointmentForm(
      localApplicationId,
      testTypeId,
      testAppointmentId,
      setTestAppointmentId,
    );

  const {
    isLoading,
    error: testAppointmentError,
    testAppointment,
  } = useTestAppointment(testAppointmentId, isEditSession);

  if (isLoading) return <Spinner />;

  if (testAppointmentError)
    return <Error message={testAppointmentError?.message} />;
  const isAppointmentLocked = isEditSession && testAppointment?.isLocked;
  const errorMessage = isAppointmentLocked
    ? "Person already sat for the test, appointment loacked."
    : error;

  return (
    <div>
      <PageTitle
        center={true}
        title={`${GetTestTypeName(testTypeId)} Test`}
        withLine={false}
      />
      <h4>{`${isEditSession ? `Edit Test Apointment (ID: ${testAppointmentId})` : "Add New Test Apointment"}`}</h4>
      <InputError className="my-0">{errorMessage}</InputError>

      <TestApointmentCard
        localApplciationId={localApplicationId}
        testTypeId={testTypeId}
        testAppointmentId={testAppointmentId}
      />
      <form onSubmit={handleSubmit}>
        <InlineInput
          label="Appointment Date"
          id="appointmentDate"
          disabled={isAppointmentLocked}
        >
          <input
            type="date"
            id="appointmentDate"
            className={`${isAppointmentLocked ? "disabled" : ""}`}
            min={today}
            defaultValue={
              isEditSession ? testAppointment.appointmentDate : today
            }
            {...register("appointmentDate", {
              required: `Appointment Date is required`,
              validate: (value) => {
                return (
                  value >= today || "Appointment date must be in the future"
                );
              },
            })}
          />
        </InlineInput>
        <SaveButton disabled={isAppointmentLocked} />
      </form>
    </div>
  );
}

export default SechduleTest;
