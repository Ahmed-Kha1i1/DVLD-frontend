/* eslint-disable react/prop-types */
import { useState } from "react";
import Error from "../../Core/ui/Error.jsx";
import Table from "../../Core/ui/Table.jsx";
import ContextMenu from "../../Core/ui/ContextMenu.jsx";
import DetainedLicensesContextMenu from "./DetainedLicensesContextMenu.jsx";
import DetainedLicenseRow from "./DetainedLicenseRow.jsx";

function DetainedLicensesTable({ detainedLicenses, error }) {
  const [selectedDetainedLicense, setSelectedDetainedLicense] = useState(null);

  const columns = "grid-cols-[0.5fr_0.6fr_1fr_0.5fr_0.6fr_1.5fr_0.7fr_1fr_1fr]";

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

      <Table.Body
        items={detainedLicenses?.items}
        render={(DetainedLicense, IsDark) => (
          <ContextMenu.Row
            id={DetainedLicense.detainID}
            key={DetainedLicense.detainID}
            action={() => {
              setSelectedDetainedLicense(DetainedLicense);
            }}
          >
            <Table.Row isDark={IsDark} id={DetainedLicense.detainID}>
              <DetainedLicenseRow DetainedLicense={DetainedLicense} />
            </Table.Row>
          </ContextMenu.Row>
        )}
      />
      <ContextMenu.Menu>
        <DetainedLicensesContextMenu
          selectedDetainedLicense={selectedDetainedLicense}
          key={selectedDetainedLicense?.detainID}
        />
      </ContextMenu.Menu>
    </Table>
  );
}

export default DetainedLicensesTable;
