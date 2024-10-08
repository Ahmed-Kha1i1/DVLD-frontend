import { useParams } from "react-router-dom";
import UserTabs from "../../Feasures/Users/UserTabs";
import useUser from "../../Feasures/Users/useUser";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import PageTitle from "../ui/PageTitle";
import { userDataType } from "../Services/ApiUsers";

function EditUser() {
  const { id } = useParams();
  const { isLoading, error, user } = useUser(id, userDataType.pref);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return (
    <div>
      <PageTitle title={`Edit User Details (ID: ${id})`} />
      <UserTabs userToEdit={user} />
    </div>
  );
}

export default EditUser;
