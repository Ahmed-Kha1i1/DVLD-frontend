/* eslint-disable react/prop-types */
import BoolColumn from "../../Core/ui/BoolColumn";
import {
  formatCurrency,
  FormatDateAsNumber,
} from "../../Core/utils/FormatUtils";
function SechduleTestRow({ selectedTestAppointment }) {
  const { testAppointmentId, appointmentDate, paidFees, isLocked } =
    selectedTestAppointment;

  return (
    <>
      <div>{testAppointmentId}</div>
      <div>{FormatDateAsNumber(appointmentDate)}</div>
      <div>{formatCurrency(paidFees)}</div>
      <div>{<BoolColumn value={isLocked} />}</div>
    </>
  );
}

export default SechduleTestRow;
