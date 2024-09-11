import { useState } from "react";
import useInternationalLicenses from "./useInternationalLicenses";
import Spiner from "../../GlobalUI/Spiner";
import Error from "../../GlobalUI/Error";
import Table from "../../GlobalUI/Table";
import ContextMenu from "../../GlobalUI/ContextMenu";
import InternationalLicenseRow from "./InternationalLicenseRow";
import InternationalLicensesContextMenu from "./InternationalLicensesContextMenu";

function InternationalLicensesTable() {
  const { isLoading, error, InternationalLicenses } =
    useInternationalLicenses();
  const [selectedInternationalLicense, setSelectedInternationalLicense] =
    useState(null);
  const columns = "grid-cols-[0.5fr_0.7fr_0.5fr_0.5fr_1.5fr_1.5fr_0.7fr_1fr]";

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>Application Id</div>
        <div>License Id</div>
        <div>Driver Id</div>
        <div>Issue Date</div>
        <div>Expiration Date</div>
        <div>Is Active</div>
        <div>Created User Id</div>
      </Table.Header>
      <ContextMenu>
        <Table.Body
          items={InternationalLicenses}
          render={(InternationalLicense) => (
            <ContextMenu.Row
              id={InternationalLicense.internationalLicenseID}
              key={InternationalLicense.internationalLicenseID}
              action={() => {
                setSelectedInternationalLicense(InternationalLicense);
              }}
            >
              <InternationalLicenseRow
                InternationalLicense={InternationalLicense}
                columns={columns}
              />
            </ContextMenu.Row>
          )}
        />
        <ContextMenu.Menu>
          <InternationalLicensesContextMenu
            selectedInternationalLicense={
              selectedInternationalLicense?.internationalLicenseID
            }
            key={selectedInternationalLicense?.internationalLicenseID}
          />
        </ContextMenu.Menu>
      </ContextMenu>
    </Table>
  );
}

export default InternationalLicensesTable;
