import { useParams } from "react-router-dom";
import useUser from "../Feasures/Users/useUser.js";
import Spiner from "../GlobalUI/Spiner.jsx";
import Error from "../GlobalUI/Error.jsx";
import PersonTopDetails from "../GlobalUI/PersonTopDetails.jsx";
import DeleteUserCard from "../Feasures/Users/DeleteUserCard";

function DeleteUser() {
  const { id } = useParams();
  const { isLoading, error, user } = useUser(id);

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PersonTopDetails person={user.person} />
      <DeleteUserCard id={id} />
    </div>
  );
}

export default DeleteUser;
