import DriverLicensesTable from "../Feasures/License/DriverLicensesTable";
import PageTitle from "../GlobalUI/PageTitle";

function DriverLicenses() {
  return (
    <div>
      <PageTitle title="Local Licenses History" />
      <DriverLicensesTable />
    </div>
  );
}

export default DriverLicenses;
