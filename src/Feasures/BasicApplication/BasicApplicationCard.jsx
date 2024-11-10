/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import Info from "../../Core/ui/Info";
import Empty from "../../Core/ui/Empty";
import { FormatDateTime } from "../../Core/utils/FormatUtils";
import StatusText from "../../Core/ui/StatusText";
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
        <Info
          title="Id"
          text={basicApplication.applicationID}
          isInLine={true}
        />
        <Info
          title="Application Type"
          text={basicApplication.applicationType}
        />
        <Info
          title="Date"
          text={FormatDateTime(basicApplication.applicationDate)}
        />
        <Info
          title="Status"
          text={<StatusText type={basicApplication.applicationStatus} />}
        />
        <Info
          title="Last Status Date"
          text={FormatDateTime(basicApplication.lastStatusDate)}
        />
        <Info title="Fees" text={basicApplication.paidFees} />
        <Info title="username" text={basicApplication.username} />
        <Info
          title="applicant Name"
          text={basicApplication.applicantFullName}
          isInLine={true}
        />
        <RedirectLink
          path={`/People/${basicApplication.applicantPersonID}/profile`}
          text="Applicant person"
        />
      </Card>
    </div>
  );
}

export default BasicApplicationCard;
