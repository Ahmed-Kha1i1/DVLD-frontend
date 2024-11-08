import { useParams } from "react-router-dom";
import Sidebar from "../../Core/ui/Sidebar";
import Link from "../../Core/ui/Link";
import { CgProfile } from "react-icons/cg";
import Error from "../../Core/ui/Error";
import Spinner from "../../Core/ui/Spinner";
import useApplication from "./useApplication";
import { applicationStatuses } from "../../Constants";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever, MdOutlineCancel } from "react-icons/md";
import { GoIssueClosed } from "react-icons/go";

function ApplicationSidebar() {
  const { id } = useParams();
  const { isLoading, error, application } = useApplication(id);
  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  const isNew =
    application.basicApplication.applicationStatus === applicationStatuses.New;

  if (!isNew) return null;
  return (
    <Sidebar>
      <Link
        text="Details"
        icon={<CgProfile />}
        type="side"
        to={`${id}/details`}
      />
      <Link text="Edit" icon={<CiEdit />} type="side" to={`${id}/edit`} />
      <Link
        text="Delete"
        icon={<MdDeleteForever />}
        type="side"
        to={`${id}/delete`}
      />
      <Link
        text="Cancel"
        icon={<MdOutlineCancel />}
        type="side"
        to={`${id}/cancel`}
      />
      {application.passedTestCount === 3 && (
        <Link
          text="Issue Driving License"
          icon={<GoIssueClosed />}
          type="side"
          to={`${id}/issue`}
        />
      )}
    </Sidebar>
  );
}

export default ApplicationSidebar;
