import ApplicationsTable from "../Feasures/Applications/ApplicationsTable ";
import PageTitle from "../GlobalUI/PageTitle";

function Applications() {
  return (
    <div>
      <PageTitle title="Manage Applications" />
      <ApplicationsTable />
    </div>
  );
}

export default Applications;
