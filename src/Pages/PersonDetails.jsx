import { useParams } from "react-router-dom";
import PersonTopDetails from "../GlobalUI/PersonTopDetails";
import Spiner from "../GlobalUI/Spiner.jsx";
import usePerson from "../Feasures/People/usePerson.js";
import PersonCard from "../Feasures/People/PersonCard.jsx";
import Error from "../GlobalUI/Error.jsx";

function PersonDetails() {
  const { id } = useParams();
  const { isLoading, error, person } = usePerson(id);

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PersonTopDetails person={person} />
      <PersonCard person={person} />
    </div>
  );
}

export default PersonDetails;
