import DetainedLicensesTable from "../Feasures/DetainedLicenses/DetainedLicensesTable";
import PageTitle from "../GlobalUI/PageTitle";

function Applications() {
  return (
    <div>
      <PageTitle title="Manage Detained Licenses" />
      <DetainedLicensesTable />
    </div>
  );
}

export default Applications;
