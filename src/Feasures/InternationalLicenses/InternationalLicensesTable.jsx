/* eslint-disable react/prop-types */
import { useState } from "react";
import Error from "../../Core/ui/Error";
import Table from "../../Core/ui/Table";
import ContextMenu from "../../Core/ui/ContextMenu";
import InternationalLicenseRow from "./InternationalLicenseRow";
import InternationalLicensesContextMenu from "./InternationalLicensesContextMenu";

function InternationalLicensesTable({ internationalLicenses }) {
  const [selectedInternationalLicense, setSelectedInternationalLicense] =
    useState(null);
  const columns =
    "grid-cols-[0.5fr_0.7fr_0.5fr_0.5fr_0.5fr_1.5fr_1.5fr_0.7fr_1fr]";

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>Application Id</div>
        <div>License Id</div>
        <div>Driver Id</div>
        <div>Person Id</div>
        <div>Issue Date</div>
        <div>Expiration Date</div>
        <div>Is Active</div>
        <div>Created User Id</div>
      </Table.Header>

      <Table.Body
        items={internationalLicenses?.items}
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
          selectedInternationalLicense={selectedInternationalLicense}
          key={selectedInternationalLicense?.internationalLicenseID}
        />
      </ContextMenu.Menu>
    </Table>
  );
}

export default InternationalLicensesTable;
