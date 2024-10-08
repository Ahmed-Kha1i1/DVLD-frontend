import UserTabs from "../../Feasures/Users/UserTabs";
import PageTitle from "../ui/PageTitle";

function AddNewUser() {
  return (
    <div className="grid h-full grid-rows-[auto_2fr]">
      <PageTitle title="Add New User" />
      <UserTabs />
    </div>
  );
}

export default AddNewUser;
