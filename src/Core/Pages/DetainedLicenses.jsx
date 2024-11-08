import DetainedLicensesWithFilter from "../../Feasures/DetainedLicenses/DetainedLicensesWithFilter";
import PageTitle from "../ui/PageTitle";

function DetainedLicenses() {
  return (
    <div>
      <PageTitle title="Manage Detained Licenses" />
      <DetainedLicensesWithFilter />
    </div>
  );
}

export default DetainedLicenses;
