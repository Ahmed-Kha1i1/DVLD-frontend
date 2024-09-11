import ApplicationTypesTable from "../Feasures/ApplicationTypes/ApplicationTypesTable";
import PageTitle from "../GlobalUI/PageTitle";

function Applications() {
  return (
    <div>
      <PageTitle title="Manage Application Types" />
      <ApplicationTypesTable />
    </div>
  );
}

export default Applications;
