import PersonForm from "../Feasures/People/PersonForm";
import PageTitle from "../GlobalUI/PageTitle";
function AddNewPerson() {
  return (
    <div>
      <PageTitle title="Add New Person" />
      <PersonForm />
    </div>
  );
}

export default AddNewPerson;
