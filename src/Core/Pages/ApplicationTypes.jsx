import ApplicationTypesTable from "../../Feasures/ApplicationTypes/ApplicationTypesTable";
import PageTitle from "../ui/PageTitle";

function Applications() {
  return (
    <div>
      <PageTitle title="Manage Application Types" />
      <ApplicationTypesTable />
    </div>
  );
}

export default Applications;
