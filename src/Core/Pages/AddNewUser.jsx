import AddEditUser from "../../Feasures/Users/AddEditUser";
import PageTitle from "../ui/PageTitle";

function AddNewUser() {
  return (
    <div className="grid h-full grid-rows-[auto_2fr]">
      <PageTitle title="Add New User" />
      <AddEditUser />
    </div>
  );
}

export default AddNewUser;
