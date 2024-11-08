/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import Empty from "../../Core/ui/Empty";
import Info from "../../Core/ui/Info";
import InfoLine from "../../Core/ui/InfoLine";
import {
  FormatDateAsNumber,
  FormatDateTime,
} from "../../Core/utils/FormatUtils";
import Active from "../../Core/ui/Active";

function InternationalLicenseCard({ internationalLicense }) {
  if (!internationalLicense)
    return <Empty>No international license to show</Empty>;
  return (
    <Card>
      <CardTitle
        text="International License Card"
        icon={<BsFillPersonVcardFill />}
      />
      <InfoLine>
        <Info title="Name" text={internationalLicense.fullName} />
        <Info
          title="Is Active"
          text={<Active active={internationalLicense.isActive} />}
        />
      </InfoLine>
      <InfoLine>
        <Info
          title="I.License Id"
          text={internationalLicense.internationalLicenseId}
        />
        <Info
          title="Application Id"
          text={internationalLicense.applicationId}
        />
      </InfoLine>
      <InfoLine>
        <Info
          title="National Number"
          text={internationalLicense?.nationalNumber}
        />
        <Info
          title="Birth Date"
          text={FormatDateAsNumber(internationalLicense?.dateOfBirth)}
        />
      </InfoLine>
      <InfoLine>
        <Info title="Gender" text={internationalLicense.gender} />
        <Info title="Driver Id" text={internationalLicense.driverId} />
      </InfoLine>
      <InfoLine>
        <Info
          title="Issue Date"
          text={FormatDateTime(internationalLicense?.issueDate)}
        />
        <Info
          title="expiration Date"
          text={FormatDateTime(internationalLicense?.expirationDate)}
        />
      </InfoLine>
    </Card>
  );
}

export default InternationalLicenseCard;
