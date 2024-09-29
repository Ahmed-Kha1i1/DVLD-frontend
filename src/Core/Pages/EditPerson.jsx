import PersonForm from "../../Feasures/People/PersonForm";
import PageTitle from "../ui/PageTitle";
import usePerson from "../../Feasures/People/usePerson";
import { useParams } from "react-router-dom";
import Spiner from "../ui/Spiner";
import Error from "../ui/Error";
function EditPerson() {
  const { id } = useParams();
  const { isLoading, error, person } = usePerson(id);

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;
  return (
    <div>
      <PageTitle title={`Edit Person Details (ID: ${id})`} />
      <PersonForm personToEdit={person} />
    </div>
  );
}

export default EditPerson;
