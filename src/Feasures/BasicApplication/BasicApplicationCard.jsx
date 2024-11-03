/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import InfoLine from "../../Core/ui/InfoLine";
import Info from "../../Core/ui/Info";
import Empty from "../../Core/ui/Empty";
import { FormatDateTime } from "../../Core/utils/FormatUtils";
import StatusText from "../../Core/ui/StatusText";
import { Link } from "react-router-dom";
import RedirectLink from "../../Core/ui/RedirectLink";
function BasicApplicationCard({ basicApplication }) {
  if (!basicApplication) return <Empty>No basic application to show</Empty>;
  return (
    <div>
      <Card>
        <CardTitle
          text="Basic Application Details"
          icon={<BsFillPersonVcardFill />}
        />

        <InfoLine>
          <Info title="Id" text={basicApplication.applicationID} />
        </InfoLine>
        <InfoLine>
          <Info
            title="Application Type"
            text={basicApplication.applicationType}
          />
          <Info
            title="Date"
            text={FormatDateTime(basicApplication.applicationDate)}
          />
        </InfoLine>
        <InfoLine>
          <Info
            title="Status"
            text={<StatusText type={basicApplication.applicationStatus} />}
          />
          <Info
            title="Last Status Date"
            text={FormatDateTime(basicApplication.lastStatusDate)}
          />
        </InfoLine>

        <InfoLine>
          <Info title="Fees" text={basicApplication.paidFees} />
          <Info title="username" text={basicApplication.username} />
        </InfoLine>
        <div>
          <Info
            title="applicant Name"
            text={basicApplication.applicantFullName}
          />
        </div>
        <RedirectLink
          path={`/People/${basicApplication.applicantPersonID}/profile`}
          text="Applicant person"
        />
      </Card>
    </div>
  );
}

export default BasicApplicationCard;
