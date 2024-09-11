import { useState } from "react";
import useDetainedLicenses from "./useDetainedLicenses.js";
import Spiner from "../../GlobalUI/Spiner.jsx";
import Error from "../../GlobalUI/Error.jsx";
import Table from "../../GlobalUI/Table.jsx";
import ContextMenu from "../../GlobalUI/ContextMenu.jsx";
import DetainedLicensesContextMenu from "./DetainedLicensesContextMenu.jsx";
import DetainedLicenseRow from "./DetainedLicenseRow.jsx";

function DetainedLicensesTable() {
  const { isLoading, error, DetainedLicenses } = useDetainedLicenses();
  const [selectedDetainedLicense, setSelectedDetainedLicense] = useState(null);

  const columns = "grid-cols-[0.5fr_0.6fr_1fr_0.5fr_0.6fr_1.5fr_0.7fr_1fr_1fr]";

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;
  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>License Id</div>
        <div>Detain Date</div>
        <div>Fine Fees</div>
        <div>National No.</div>
        <div>Full Name</div>
        <div>Is Released</div>
        <div>Release Date</div>
        <div>Release Application Id</div>
      </Table.Header>
      <ContextMenu>
        <Table.Body
          items={DetainedLicenses}
          render={(DetainedLicense) => (
            <ContextMenu.Row
              id={DetainedLicense.detainID}
              key={DetainedLicense.detainID}
              action={() => {
                setSelectedDetainedLicense(DetainedLicense);
              }}
            >
              <DetainedLicenseRow
                DetainedLicense={DetainedLicense}
                columns={columns}
              />
            </ContextMenu.Row>
          )}
        />
        <ContextMenu.Menu>
          <DetainedLicensesContextMenu
            selectedDetainedLicense={selectedDetainedLicense}
            key={selectedDetainedLicense?.detainID}
          />
        </ContextMenu.Menu>
      </ContextMenu>
    </Table>
  );
}

export default DetainedLicensesTable;
