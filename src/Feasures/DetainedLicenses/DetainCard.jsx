/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import InfoLine from "../../Core/ui/InfoLine";
import Info from "../../Core/ui/Info";
import useDetainedLicense from "./useDetainedLicense";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";
import { formatCurrency, FormatDateTime } from "../../Core/utils/FormatUtils";

function DetainCard({ detainId, licenseId }) {
  const { isLoading, error, detainedLicense } = useDetainedLicense(detainId);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Card>
      <CardTitle text="Detain Details" icon={<BsFillPersonVcardFill />} />
      <InfoLine>
        <Info title="Detained Id" text={detainedLicense?.detainedId} />
        <Info title="License Id" text={licenseId} />
      </InfoLine>
      <InfoLine>
        <Info
          title="Detain Date"
          text={
            detainedLicense?.detainDate &&
            FormatDateTime(detainedLicense?.detainDate)
          }
        />
        <Info title="Created By" text={detainedLicense?.createdByUserID} />
      </InfoLine>
      <InfoLine>
        <Info
          title="Fine Fees"
          text={
            detainedLicense?.fineFees &&
            formatCurrency(detainedLicense?.fineFees)
          }
        />
      </InfoLine>
    </Card>
  );
}

export default DetainCard;
