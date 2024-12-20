/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import Info from "../../Core/ui/Info";
import InfoLine from "../../Core/ui/InfoLine";
import {
  FormatDateAsNumber,
  FormatDateTime,
} from "../../Core/utils/FormatUtils";
import Active from "../../Core/ui/Active";
import BoolColumn from "../../Core/ui/BoolColumn";
import RedirectLink from "../../Core/ui/RedirectLink";

function LicenseCard({ License }) {
  return (
    <Card>
      <CardTitle text="License Details" icon={<BsFillPersonVcardFill />} />

      <Info title="Id" text={License?.licenseId || "????"} isInLine={true} />

      <Info title="Name" text={License?.fullName || "????"} />
      <Info title="National Number" text={License?.nationalNumber || "????"} />

      <Info title="Class Name" text={License?.className || "????"} />
      <Info
        title="Is Active"
        text={<Active active={License?.isActive} large={false} />}
      />

      <Info title="Gender" text={License?.gender || "????"} />
      <Info
        title="Birth Date"
        text={
          License?.dateOfBirth
            ? FormatDateAsNumber(License.dateOfBirth)
            : "????"
        }
      />

      <Info
        title="Issue Date"
        text={License?.issueDate ? FormatDateTime(License.issueDate) : "????"}
      />
      <Info
        title="Epiration Date"
        text={
          License?.expirationDate
            ? FormatDateTime(License.expirationDate)
            : "????"
        }
      />

      <Info title="Driver Id" text={License?.driverId || "????"} />
      <Info
        title="Is Detained"
        text={<BoolColumn value={License?.isDetained} />}
      />

      <Info
        title="Issue Reason"
        text={License?.issueReason || "????"}
        isInLine={true}
      />

      <Info
        title="Notes"
        text={
          License?.notes || (
            <span className="italic text-gray-600">No notes available</span>
          )
        }
        isInLine={true}
      />

      <RedirectLink
        path={`/drivers/${License?.driverId}/profile`}
        text="Driver Info"
        disabled={!License?.driverId}
      />
    </Card>
  );
}

export default LicenseCard;
