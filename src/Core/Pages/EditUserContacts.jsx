import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import PageTitle from "../ui/PageTitle";
import PersonTopDetails from "../ui/PersonTopDetails";
import ContactForm from "../../Feasures/People/ContactForm";
import useUserPerson from "../../Feasures/Users/useUserPerson";

function EditUserContacts() {
  const { id } = useParams();
  const { isLoading, error, person } = useUserPerson(id);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PageTitle title={`Edit Contact Details (ID: ${id})`} />
      <PersonTopDetails person={person} className="my-10" />
      <ContactForm personToEdit={person} />
    </div>
  );
}

export default EditUserContacts;
