/* eslint-disable react/prop-types */
import PersonForm from "./PersonForm";
import usePerson from "./usePerson";
import Error from "../../Core/ui/Error";
import PageTitle from "../../Core/ui/PageTitle";
import Spinner from "../../Core/ui/Spinner";

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
