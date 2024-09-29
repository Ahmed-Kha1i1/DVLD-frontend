import { useParams } from "react-router-dom";
import Error from "../ui/Error";
import Spiner from "../ui/Spiner";
import usePerson from "../../Feasures/People/usePerson";
import PersonTopDetails from "../ui/PersonTopDetails";
import DeletePersonCard from "../../Feasures/People/DeletePersonCard";

function DeletePerson() {
  const { id } = useParams();
  const { isLoading, error, person } = usePerson(id);

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PersonTopDetails person={person} />
      <DeletePersonCard id={id} />
    </div>
  );
}

export default DeletePerson;