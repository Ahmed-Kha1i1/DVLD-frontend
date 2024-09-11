import { useState } from "react";
import useDrivers from "./useDrivers.js";
import Spiner from "../../GlobalUI/Spiner.jsx";
import Error from "../../GlobalUI/Error.jsx";
import Table from "../../GlobalUI/Table.jsx";
import ContextMenu from "../../GlobalUI/ContextMenu.jsx";
import DriverContextMenu from "./DriverContextMenu.jsx";
import DriverRow from "./DriverRow.jsx";
function DriversTable() {
  const { isLoading, error, Drivers } = useDrivers();
  const [selectedDriver, setSelectedDriver] = useState(null);

  const columns = "grid-cols-[0.5fr_0.6fr_0.6fr_2.3fr_1.7fr_1.5fr]";

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;

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
      <ContextMenu>
        <Table.Body
          items={Drivers}
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
      </ContextMenu>
    </Table>
  );
}

export default DriversTable;
