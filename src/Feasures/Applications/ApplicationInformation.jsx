import { useParams } from "react-router-dom";

function ApplicationInformation() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default ApplicationInformation;
