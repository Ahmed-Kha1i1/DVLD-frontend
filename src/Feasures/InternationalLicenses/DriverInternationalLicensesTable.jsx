/* eslint-disable react/prop-types */
import { useState } from "react";
import useDriverInternationalLicenses from "./useDriverInternationalLicenses.js";
import Spinner from "../../Core/ui/Spinner.jsx";
import Error from "../../Core/ui/Error.jsx";
import Table from "../../Core/ui/Table.jsx";
import ContextMenu from "../../Core/ui/ContextMenu.jsx";
import LicenseContextMenu from "../../Core/ui/LicenseContextMenu.jsx";

import DriverInternationalLicenseRow from "./DriverInternationalLicenseRow";
function DriverInternationalLicensesTable({ driverId }) {
  const { isLoading, error, driverInternationalLicenses } =
    useDriverInternationalLicenses(driverId);
  const [selectedLicense, setSelectedLicense] = useState(null);
  const columns = "grid-cols-[1fr_1fr_1fr_1.3fr_1.3fr_0.5fr]";

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>International License Id</div>
        <div>Application Id</div>
        <div>Local License Id</div>
        <div>Issue Date</div>
        <div>Expiration Date</div>
        <div>Is Active</div>
      </Table.Header>

      <Table.Body
        items={driverInternationalLicenses}
        render={(driverInternationalLicense, IsDark) => (
          <ContextMenu.Row
            id={driverInternationalLicense.v}
            key={driverInternationalLicense.internationalLicenseID}
            action={() => {
              setSelectedLicense(driverInternationalLicense);
            }}
          >
            <Table.Row
              isDark={IsDark}
              id={driverInternationalLicense.internationalLicenseID}
            >
              <DriverInternationalLicenseRow
                driverInternationalLicense={driverInternationalLicense}
              />
            </Table.Row>
          </ContextMenu.Row>
        )}
      />
      <ContextMenu.Menu>
        <LicenseContextMenu
          //to={`${selectedLicense.licenseID}/InternationalLicenses`}
          key={selectedLicense?.licenseID}
        />
      </ContextMenu.Menu>
    </Table>
  );
}

export default DriverInternationalLicensesTable;
