/* eslint-disable react/prop-types */
import { useState } from "react";
import useTestAppointments from "./useTestAppointments";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";
import Table from "../../Core/ui/Table";
import ContextMenu from "../../Core/ui/ContextMenu";
import SechduleTestRow from "./SechduleTestRow";
import SechduleTestContextMenu from "./SechduleTestContextMenu";

function SechduleTestTable({ localApplicationId, testTypeId }) {
  const { isLoading, error, testAppointments } = useTestAppointments(
    localApplicationId,
    testTypeId,
  );
  const [selectedTestAppointment, setSelectedTestAppointment] = useState(null);

  const columns = "grid-cols-[1fr_1.5fr_1fr_1fr]";

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return (
    <Table columns={columns} isSmall={true}>
      <Table.Header>
        <div>Id</div>
        <div>Appointment Date</div>
        <div>Paid Fees</div>
        <div>Is Locked</div>
      </Table.Header>

      <Table.Body
        items={testAppointments}
        render={(testAppointment, IsDark) => (
          <ContextMenu.Row
            id={testAppointment.testAppointmentId}
            key={testAppointment.testAppointmentId}
            action={() => {
              setSelectedTestAppointment(testAppointment);
            }}
          >
            <Table.Row isDark={IsDark} id={testAppointment.testAppointmentId}>
              <SechduleTestRow selectedTestAppointment={testAppointment} />
            </Table.Row>
          </ContextMenu.Row>
        )}
      />
      <ContextMenu.Menu>
        <SechduleTestContextMenu
          selectedTestAppointment={selectedTestAppointment}
          testTypeId={testTypeId}
          key={selectedTestAppointment?.testAppointmentId}
        />
      </ContextMenu.Menu>
    </Table>
  );
}

export default SechduleTestTable;
