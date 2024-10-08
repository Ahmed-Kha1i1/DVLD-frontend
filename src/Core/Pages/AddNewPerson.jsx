/* eslint-disable react/prop-types */
import PersonForm from "../../Feasures/People/PersonForm";
import PageTitle from "../ui/PageTitle";
function AddNewPerson({ onAddSuccess }) {
  return (
    <div>
      <PageTitle title="Add New Person" />
      <PersonForm onAddSuccess={onAddSuccess} />
    </div>
  );
}

export default AddNewPerson;
