import { useParams } from "react-router-dom";
import useLicense from "../../Feasures/License/useLicense";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import LicenseCard from "../../Feasures/License/LicenseCard";

function LicenseDetails() {
  const { id: licenseId } = useParams();
  const { isLoading, error, License } = useLicense(licenseId);
  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return <LicenseCard License={License} />;
}

export default LicenseDetails;
