import { useParams } from "react-router-dom";
import ApplicationCard from "../../Feasures/Applications/ApplicationCard";
import BasicApplicationCard from "../../Feasures/BasicApplication/BasicApplicationCard";
import PageTitle from "../ui/PageTitle";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import useApplication from "../../Feasures/Applications/useApplication";

function ApplicationDetails() {
  const { id } = useParams();
  const { isLoading, error, application } = useApplication(id);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return (
    <div>
      <PageTitle title="Application Details" />
      <div>
        <ApplicationCard application={application} />
        <BasicApplicationCard basicApplication={application.basicApplication} />
      </div>
    </div>
  );
}

export default ApplicationDetails;
