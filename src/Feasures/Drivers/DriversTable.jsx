/* eslint-disable react/prop-types */
import { useState } from "react";
import Table from "../../Core/ui/Table.jsx";
import ContextMenu from "../../Core/ui/ContextMenu.jsx";
import DriverContextMenu from "./DriverContextMenu.jsx";
import DriverRow from "./DriverRow.jsx";
function DriversTable({ drivers }) {
  const [selectedDriver, setSelectedDriver] = useState(null);

  const columns = "grid-cols-[0.8fr_0.8fr_0.8fr_3fr_2fr_1fr]";

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>Person Id</div>
        <div>National No.</div>
        <div>Full Name</div>
        <div>Created Date</div>
        <div>Active License</div>
      </Table.Header>

      <Table.Body
        items={drivers?.items}
        render={(Driver, IsDark) => (
          <ContextMenu.Row
            id={Driver.driverID}
            key={Driver.driverID}
            action={() => {
              setSelectedDriver(Driver);
            }}
          >
            <Table.Row isDark={IsDark} id={Driver.driverID}>
              <DriverRow Driver={Driver} />
            </Table.Row>
          </ContextMenu.Row>
        )}
      />
      <ContextMenu.Menu>
        <DriverContextMenu
          SelectedDriver={selectedDriver}
          key={selectedDriver?.driverID}
        />
      </ContextMenu.Menu>
    </Table>
  );
}

export default DriversTable;
