/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import Error from "../../Core/ui/Error";
import Info from "../../Core/ui/Info";
import Spinner from "../../Core/ui/Spinner";
import useBaseApplication from "../BasicApplication/useBaseApplication";
import useLicense from "../License/useLicense";
import InfoLine from "../../Core/ui/InfoLine";
import { formatCurrency, FormatDateTime } from "../../Core/utils/FormatUtils";

function RenewCard({ OldLiceseId, newLicenseId }) {
  const { isLoading: newLicenseLoading, License: newLicense } =
    useLicense(newLicenseId);
  const { isLoading, error, baseApplication } = useBaseApplication(
    newLicense?.applicationId,
  );
  if (isLoading || newLicenseLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Card>
      <CardTitle text="Application Details" icon={<BsFillPersonVcardFill />} />
      <InfoLine>
        <Info title="Application Id" text={baseApplication?.applicationId} />
        <Info title="R.License Id" text={newLicenseId}>
          <span className="ml-4 block">(Renew)</span>
        </Info>
      </InfoLine>
      <InfoLine>
        <Info
          title="Application Date"
          text={
            baseApplication?.applicationDate &&
            FormatDateTime(baseApplication?.applicationDate)
          }
        />
        <Info title="Old License Id" text={OldLiceseId} />
      </InfoLine>
      <InfoLine>
        <Info
          title="Issue Date"
          text={newLicense?.issueDate && FormatDateTime(newLicense?.issueDate)}
        />
        <Info
          title="expiration Date"
          text={
            newLicense?.expirationDate &&
            FormatDateTime(newLicense?.expirationDate)
          }
        />
      </InfoLine>
      <InfoLine>
        <Info
          title="Application Fees:"
          text={
            baseApplication?.paidFees &&
            formatCurrency(baseApplication?.paidFees)
          }
        />
        <Info title="Created By:" text={baseApplication?.createdByUserID} />
      </InfoLine>
    </Card>
  );
}

export default RenewCard;
