/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import Error from "../../Core/ui/Error";
import Info from "../../Core/ui/Info";
import InfoLine from "../../Core/ui/InfoLine";
import Spinner from "../../Core/ui/Spinner";
import { formatCurrency, FormatDateTime } from "../../Core/utils/FormatUtils";
import useDetainedLicense from "./useDetainedLicense";
import useBaseApplication from "../BasicApplication/useBaseApplication";
import { detainedLicensedetailTypes } from "./detainedLicensesKeys";

function ReleaseCard({ applicationId, licenseId }) {
  const { isLoading, error, detainedLicense } = useDetainedLicense(
    licenseId,
    detainedLicensedetailTypes.LICENSE_ID,
  );
  const {
    isLoading: applicationLoading,
    error: applicationError,
    baseApplication,
  } = useBaseApplication(applicationId);

  if (isLoading || applicationLoading) return <Spinner />;

  if (error || applicationError)
    return <Error message={error?.message || applicationError?.error} />;

  return (
    <Card>
      <CardTitle text="Detain Details" icon={<BsFillPersonVcardFill />} />
      <div>
        <Info title="Detained Id" text={detainedLicense?.detainedId} />
      </div>
      <InfoLine>
        <Info
          title="Detain Date"
          text={
            detainedLicense?.detainDate &&
            FormatDateTime(detainedLicense?.detainDate)
          }
        />
        <Info title="License Id" text={licenseId} />
      </InfoLine>
      <InfoLine>
        <Info
          title="Fine Fees"
          text={
            detainedLicense?.fineFees &&
            formatCurrency(detainedLicense?.fineFees)
          }
        />
        <Info
          title="Application Fees"
          text={
            baseApplication?.paidFees &&
            formatCurrency(baseApplication?.paidFees)
          }
        />
      </InfoLine>
      <InfoLine>
        <Info title="Created By" text={baseApplication?.createdByUserID} />
        <Info title="Application Id" text={baseApplication?.applicationId} />
      </InfoLine>
    </Card>
  );
}

export default ReleaseCard;
