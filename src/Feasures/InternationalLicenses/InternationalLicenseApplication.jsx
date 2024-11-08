/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import InfoLine from "../../Core/ui/InfoLine";
import Info from "../../Core/ui/Info";
import { formatCurrency, FormatDateTime } from "../../Core/utils/FormatUtils";
import useInternationalLicenseApplication from "./useInternationalLicenseApplication";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";

function InternationalLicenseApplication({
  internationalApplicationId,
  licenseId,
}) {
  const {
    isLoading,
    error,
    internationalLicenseApplication: internationalApplication,
  } = useInternationalLicenseApplication(internationalApplicationId);
  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return (
    <Card>
      <CardTitle
        text="International Application Details"
        icon={<BsFillPersonVcardFill />}
      />
      <InfoLine>
        <Info
          title="Application Id"
          text={internationalApplication?.applicationId}
        />
        <Info
          title="I.License Id"
          text={internationalApplication?.internationalLicenseId}
        >
          <span className="ml-4 block">(International)</span>
        </Info>
      </InfoLine>
      <InfoLine>
        <Info
          title="Application Date"
          text={
            internationalApplication?.applicationDate &&
            FormatDateTime(internationalApplication?.applicationDate)
          }
        />
        <Info
          title="Local License Id"
          text={internationalApplication?.localLicenseId || licenseId}
        />
      </InfoLine>
      <InfoLine>
        <Info
          title="Issue Date"
          text={
            internationalApplication?.issueDate &&
            FormatDateTime(internationalApplication?.issueDate)
          }
        />
        <Info
          title="expiration Date"
          text={
            internationalApplication?.expirationDate &&
            FormatDateTime(internationalApplication?.expirationDate)
          }
        />
      </InfoLine>
      <InfoLine>
        <Info
          title="Application Fees"
          text={formatCurrency(internationalApplication?.applicationFees)}
        />
        <Info
          title="Created By"
          text={internationalApplication?.createdUserId}
        />
      </InfoLine>
    </Card>
  );
}

export default InternationalLicenseApplication;
