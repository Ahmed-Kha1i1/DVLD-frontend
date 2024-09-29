import { useParams } from "react-router-dom";
import UserCard from "../../Feasures/Users/UserCard";
//import PersonTopDetails from "../GlobalUI/PersonTopDetails";
import Spiner from "../ui/Spiner";
import Error from "../ui/Error";
import useUser from "../../Feasures/Users/useUser";
import PersonTopDetails from "../ui/PersonTopDetails";
import PersonCard from "../../Feasures/People/PersonCard";

function UserDetails() {
  const { id } = useParams();
  const { isLoading, error, user } = useUser(id);
  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PersonTopDetails person={user.person} />
      <PersonCard person={user.person} />
      <UserCard user={user} />
    </div>
  );
}

export default UserDetails;
