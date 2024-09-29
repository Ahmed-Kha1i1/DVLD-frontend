import { useState } from "react";
import useDriverLicenses from "./useDriverLicenses";
import Spiner from "../../Core/ui/Spiner";
import Error from "../../Core/ui/Error";
import Table from "../../Core/ui/Table";
import ContextMenu from "../../Core/ui/ContextMenu";
import LicenseContextMenu from "../../Core/ui/LicenseContextMenu";
import { useParams } from "react-router-dom";
import DriverLicenseRow from "./DriverLicenseRow";
function DriverLicensesTable() {
  let { id } = useParams();
  const { isLoading, error, driverLicenses } = useDriverLicenses(id);
  const [selectedLicense, setSelectedLicense] = useState(null);
  const columns = "grid-cols-[0.6fr_0.6fr_1.3fr_1.3fr_1.3fr_0.5fr]";

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>License Id</div>
        <div>Application Id</div>
        <div>class Name</div>
        <div>Issue Date</div>
        <div>Expiration Date</div>
        <div>Is Active</div>
      </Table.Header>
      <ContextMenu>
        <Table.Body
          items={driverLicenses}
          render={(driverLicense, IsDark) => (
            <ContextMenu.Row
              id={driverLicense.v}
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
            //to={`${selectedLicense.licenseID}/Licenses`}
            key={selectedLicense?.licenseID}
          />
        </ContextMenu.Menu>
      </ContextMenu>
    </Table>
  );
}

export default DriverLicensesTable;
