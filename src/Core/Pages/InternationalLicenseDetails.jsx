import Spinner from "../ui/Spinner";
import useInternationalLicense from "../../Feasures/InternationalLicenses/useInternationalLicense";
import InternationalLicenseCard from "../../Feasures/InternationalLicenses/InternationalLicenseCard";
import { useParams } from "react-router-dom";
import PageTitle from "../ui/PageTitle";

function InternationalLicenseDetails() {
  const { id } = useParams();
  const { isLoading, internationalLicense } = useInternationalLicense(id);
  if (isLoading) return <Spinner />;

  return (
    <div>
      <PageTitle title="International License Details" />
      <InternationalLicenseCard internationalLicense={internationalLicense} />
    </div>
  );
}

export default InternationalLicenseDetails;
