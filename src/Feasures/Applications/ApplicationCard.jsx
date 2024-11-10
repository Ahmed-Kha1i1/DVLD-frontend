/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import Empty from "../../Core/ui/Empty";
import { applicationStatuses } from "../../Constants";
import Info from "../../Core/ui/Info";
import RedirectLink from "../../Core/ui/RedirectLink";
import useActiveLicenseId from "./useActiveLicenseId";
import {
  determineNextTestText,
  determineNextTestRoute,
} from "../../Core/Utils/helpers";

function ApplicationCard({ application }) {
  const { isLoading, LicenseId } = useActiveLicenseId(
    application?.localApplicationId,
  );
  if (!application) return <Empty>No application to show</Empty>;
  return (
    <Card>
      <CardTitle text="Application Details" icon={<BsFillPersonVcardFill />} />
      <Info title="Id" text={application.localApplicationId} isInLine={true} />
      <Info title="Applied For License" text={application.className} />
      <Info title="Passed Tests" text={application.passedTestCount} />
      {application.passedTestCount != 3 &&
        application.basicApplication.applicationStatus ===
          applicationStatuses.New && (
          <RedirectLink
            path={`/applications/${application?.localApplicationId}/${determineNextTestRoute(application.passedTestCount)}`}
            text={`Sechdule The Next Test (${determineNextTestText(application.passedTestCount)} Test)`}
          />
        )}
      <RedirectLink
        path={`/licenses/${LicenseId}`}
        text={`${isLoading ? "Loading..." : "Active License"}`}
        disabled={isLoading || !LicenseId}
      />
    </Card>
  );
}

export default ApplicationCard;
