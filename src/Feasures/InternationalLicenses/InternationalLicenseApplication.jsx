/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import InfoLine from "../../Core/ui/InfoLine";
import Info from "../../Core/ui/Info";

function InternationalLicenseApplication({ application, licenseId }) {
  return (
    <Card>
      <CardTitle
        text="International Application Details"
        icon={<BsFillPersonVcardFill />}
      />
      <InfoLine>
        <Info title="Application Id" text={application.applicationId} />
        <Info title="international" text={basicApplication.username} />
      </InfoLine>
      <InfoLine>
        <Info title="Fees" text={basicApplication.paidFees} />
        <Info title="username" text={basicApplication.username} />
      </InfoLine>
      <InfoLine>
        <Info title="Fees" text={basicApplication.paidFees} />
        <Info title="username" text={basicApplication.username} />
      </InfoLine>
    </Card>
  );
}

export default InternationalLicenseApplication;
