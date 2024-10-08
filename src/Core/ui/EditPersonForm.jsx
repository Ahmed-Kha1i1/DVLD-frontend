/* eslint-disable react/prop-types */
import PersonForm from "../../Feasures/People/PersonForm";
import usePerson from "../../Feasures/People/usePerson";
import Error from "./Error";
import PageTitle from "./PageTitle";
import Spinner from "./Spinner";

function EditPersonForm({ onSuccess, personId, navigate = true }) {
  const { isLoading, error, person } = usePerson(personId);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return (
    <div>
      <PageTitle title={`Edit Person Details (ID: ${personId})`} />
      <PersonForm
        personToEdit={person}
        updateNavigate={navigate ? `/people/${personId}/profile` : undefined}
        onSuccess={onSuccess}
      />
    </div>
  );
}

export default EditPersonForm;
