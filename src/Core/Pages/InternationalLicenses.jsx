import InternationalLicensesTable from "../../Feasures/InternationalLicenses/InternationalLicensesTable";
import AddButton from "../ui/AddButton";
import PageTitle from "../ui/PageTitle";

function InternationalLicenses() {
  return (
    <div>
      <PageTitle title="Manage International Applications" />
      <div className="mb-3 flex">
        <AddButton to="add-new" />
      </div>
      <InternationalLicensesTable />
    </div>
  );
}

export default InternationalLicenses;
