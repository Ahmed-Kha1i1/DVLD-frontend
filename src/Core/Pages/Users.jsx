import UsersWithFilter from "../../Feasures/Users/UsersWithFilter";
import PageTitle from "../ui/PageTitle";

function Users() {
  return (
    <div>
      <PageTitle title="Manage Users" />
      <UsersWithFilter />
    </div>
  );
}

export default Users;
