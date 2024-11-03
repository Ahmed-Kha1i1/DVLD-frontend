/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import Empty from "../../Core/ui/Empty";
import InfoLine from "../../Core/ui/InfoLine";
import Info from "../../Core/ui/Info";
import RedirectLink from "../../Core/ui/RedirectLink";
import useActiveLicenseId from "./useActiveLicenseId";

function ApplicationCard({ application }) {
  const { isLoading, LicenseId } = useActiveLicenseId(
    application?.localApplicationId,
  );
  if (!application) return <Empty>No application to show</Empty>;
  return (
    <Card>
      <CardTitle text="Application Details" icon={<BsFillPersonVcardFill />} />
      <InfoLine>
        <Info title="Id" text={application.localApplicationId} />
      </InfoLine>
      <InfoLine>
        <Info title="Applied For License" text={application.className} />
        <Info title="Passed Tests" text={application.passedTestCount} />
      </InfoLine>
      <RedirectLink
        path={`/licenses/${LicenseId}`}
        text={`${isLoading ? "Loading..." : "Active License"}`}
        disabled={isLoading || !LicenseId}
      />
    </Card>
  );
}

export default ApplicationCard;
