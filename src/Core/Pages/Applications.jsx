import ApplicationsTableWithFilter from "../../Feasures/Applications/ApplicationsTableWithFilter";
import PageTitle from "../ui/PageTitle";
function Applications() {
  return (
    <div>
      <PageTitle title="Manage Applications" />
      <ApplicationsTableWithFilter />
    </div>
  );
}

export default Applications;
