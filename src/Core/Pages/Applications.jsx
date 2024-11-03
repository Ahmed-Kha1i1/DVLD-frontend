import ApplicationsTable from "../../Feasures/Applications/ApplicationsTable ";
import PageTitle from "../ui/PageTitle";
import AddButton from "../ui/AddButton";
function Applications() {
  return (
    <div>
      <PageTitle title="Manage Applications" />
      <div className="mb-3 flex">
        <AddButton to="add-new" />
      </div>
      <ApplicationsTable />
    </div>
  );
}

export default Applications;
