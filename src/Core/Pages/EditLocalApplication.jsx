import { useParams } from "react-router-dom";
import LocalApplicationTabs from "../../Feasures/Applications/LocalApplicationTabs";
import PageTitle from "../ui/PageTitle";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import useApplication from "../../Feasures/Applications/useApplication";
import { applicationDataType } from "../Services/ApiApplications";
function EditApplication() {
  const { id } = useParams();
  const { isLoading, error, application } = useApplication(
    id,
    applicationDataType.pref,
  );

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return (
    <div>
      <PageTitle title={`Edit Application (ID = ${id})`} />
      <LocalApplicationTabs applicationToEdit={application} />
    </div>
  );
}

export default EditApplication;
