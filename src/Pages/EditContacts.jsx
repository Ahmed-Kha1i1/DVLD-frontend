import { useParams } from "react-router-dom";
import usePerson from "../Feasures/People/usePerson";
import Spiner from "../GlobalUI/Spiner";
import Error from "../GlobalUI/Error";
import PersonTopDetails from "../GlobalUI/PersonTopDetails";
import ContactForm from "../Feasures/People/ContactForm";
import PageTitle from "../GlobalUI/PageTitle";

function EditContacts() {
  const { id } = useParams();
  const { isLoading, error, person } = usePerson(id);

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PageTitle title={`Edit Contact Details (ID: ${id})`} />
      <PersonTopDetails person={person} className="my-10" />
      <ContactForm personToEdit={person} />
    </div>
  );
}

export default EditContacts;
