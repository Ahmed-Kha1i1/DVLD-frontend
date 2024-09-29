import { useParams } from "react-router-dom";
import usePerson from "../../Feasures/People/usePerson";
import Spiner from "../ui/Spiner";
import Error from "../ui/Error";
import PersonTopDetails from "../ui/PersonTopDetails";
import ContactForm from "../../Feasures/People/ContactForm";
import PageTitle from "../ui/PageTitle";

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
