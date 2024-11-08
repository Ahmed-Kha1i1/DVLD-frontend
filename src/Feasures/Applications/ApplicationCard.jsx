/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import Empty from "../../Core/ui/Empty";
import InfoLine from "../../Core/ui/InfoLine";
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
      <InfoLine>
        <Info title="Id" text={application.localApplicationId} />
      </InfoLine>
      <InfoLine>
        <Info title="Applied For License" text={application.className} />
        <Info title="Passed Tests" text={application.passedTestCount} />
      </InfoLine>
      <div className="flex gap-4">
        <RedirectLink
          path={`/licenses/${LicenseId}`}
          text={`${isLoading ? "Loading..." : "Active License"}`}
          disabled={isLoading || !LicenseId}
        />
        {application.passedTestCount != 3 && (
          <RedirectLink
            path={`/applications/${application?.localApplicationId}/${determineNextTestRoute(application.passedTestCount)}`}
            text={`Sechdule The Next Test (${determineNextTestText(application.passedTestCount)} Test)`}
          />
        )}
      </div>
    </Card>
  );
}

export default ApplicationCard;
