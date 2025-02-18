/* eslint-disable react/prop-types */
import { useState } from "react";
import useDriverLicenses from "./useDriverLicenses";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";
import Table from "../../Core/ui/Table";
import ContextMenu from "../../Core/ui/ContextMenu";
import LicenseContextMenu from "../../Core/ui/LicenseContextMenu";
import DriverLicenseRow from "./DriverLicenseRow";

function DriverLicensesTable({ driverId }) {
  const { isLoading, error, driverLicenses } = useDriverLicenses(driverId);

  const [selectedLicense, setSelectedLicense] = useState(null);
  const columns = "grid-cols-[0.6fr_0.6fr_1.3fr_1.3fr_1.3fr_0.5fr]";

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Table columns={columns} isSmall={true}>
      <Table.Header>
        <div>License Id</div>
        <div>Application Id</div>
        <div>class Name</div>
        <div>Issue Date</div>
        <div>Expiration Date</div>
        <div>Is Active</div>
      </Table.Header>

      <Table.Body
        items={driverLicenses}
        render={(driverLicense, IsDark) => (
          <ContextMenu.Row
            id={driverLicense.licenseID}
            key={driverLicense.licenseID}
            action={() => {
              setSelectedLicense(driverLicense);
            }}
          >
            <Table.Row isDark={IsDark} id={driverLicense.licenseID}>
              <DriverLicenseRow driverLicense={driverLicense} />
            </Table.Row>
          </ContextMenu.Row>
        )}
      />
      <ContextMenu.Menu>
        <LicenseContextMenu
          key={selectedLicense?.licenseID}
          to={`/Licenses/${selectedLicense?.licenseID}`}
        />
      </ContextMenu.Menu>
    </Table>
  );
}

export default DriverLicensesTable;
