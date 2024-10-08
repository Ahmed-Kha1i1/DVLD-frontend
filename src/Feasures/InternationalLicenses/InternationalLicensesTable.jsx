import { useState } from "react";
import useInternationalLicenses from "./useInternationalLicenses";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";
import Table from "../../Core/ui/Table";
import ContextMenu from "../../Core/ui/ContextMenu";
import InternationalLicenseRow from "./InternationalLicenseRow";
import InternationalLicensesContextMenu from "./InternationalLicensesContextMenu";

function InternationalLicensesTable() {
  const { isLoading, error, InternationalLicenses } =
    useInternationalLicenses();
  const [selectedInternationalLicense, setSelectedInternationalLicense] =
    useState(null);
  const columns = "grid-cols-[0.5fr_0.7fr_0.5fr_0.5fr_1.5fr_1.5fr_0.7fr_1fr]";

  if (isLoading) return <Spinner />;

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
          render={(InternationalLicense, IsDark) => (
            <ContextMenu.Row
              id={InternationalLicense.internationalLicenseID}
              key={InternationalLicense.internationalLicenseID}
              action={() => {
                setSelectedInternationalLicense(InternationalLicense);
              }}
            >
              <Table.Row
                isDark={IsDark}
                id={InternationalLicense.internationalLicenseID}
              >
                <InternationalLicenseRow
                  InternationalLicense={InternationalLicense}
                />
              </Table.Row>
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
