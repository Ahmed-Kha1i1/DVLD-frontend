import { useParams } from "react-router-dom";
import UserCard from "../../Feasures/Users/UserCard";
//import PersonTopDetails from "../GlobalUI/PersonTopDetails";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import useUser from "../../Feasures/Users/useUser";
import PersonCard from "../../Feasures/People/PersonCard";

function UserDetails() {
  const { id } = useParams();
  const { isLoading, error, user } = useUser(id);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PersonCard person={user.person} />
      <UserCard user={user} />
    </div>
  );
}

export default UserDetails;
