import DetainedLicensesTable from "../../Feasures/DetainedLicenses/DetainedLicensesTable";
import PageTitle from "../ui/PageTitle";

function Applications() {
  return (
    <div>
      <PageTitle title="Manage Detained Licenses" />
      <DetainedLicensesTable />
    </div>
  );
}

export default Applications;
