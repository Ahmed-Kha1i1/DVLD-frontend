import { useParams } from "react-router-dom";
import PageTitle from "../ui/PageTitle";
import UpdatePasswordForm from "../../Feasures/Users/UpdatePasswordForm";

function ChangePassword() {
  const { id } = useParams();
  return (
    <div>
      <PageTitle title={`Change Password (ID: ${id})`} />
      <UpdatePasswordForm userId={id} />
    </div>
  );
}

export default ChangePassword;
