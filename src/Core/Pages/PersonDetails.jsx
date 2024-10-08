import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner.jsx";
import usePerson from "../../Feasures/People/usePerson.js";
import PersonCard from "../../Feasures/People/PersonCard.jsx";
import Error from "../ui/Error.jsx";

function PersonDetails() {
  const { id } = useParams();
  const { isLoading, error, person } = usePerson(id);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PersonCard person={person} />
    </div>
  );
}

export default PersonDetails;
