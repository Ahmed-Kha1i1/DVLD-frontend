import { useParams } from "react-router-dom";
import useUser from "../../Feasures/Users/useUser.js";
import Spinner from "../ui/Spinner.jsx";
import Error from "../ui/Error.jsx";
import PersonTopDetails from "../ui/PersonTopDetails.jsx";
import DeleteUserCard from "../../Feasures/Users/DeleteUserCard.jsx";

function DeleteUser() {
  const { id } = useParams();
  const { isLoading, error, user } = useUser(id);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PersonTopDetails person={user.person} />
      <DeleteUserCard id={id} />
    </div>
  );
}

export default DeleteUser;
