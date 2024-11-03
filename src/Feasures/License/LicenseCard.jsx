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

function LicenseCard({ License }) {
  return (
    <Card>
      <CardTitle text="License Details" icon={<BsFillPersonVcardFill />} />
      <div>
        <Info title="Id" text={License?.licenseId || "????"} />
      </div>
      <InfoLine>
        <Info title="Name" text={License?.fullName || "????"} />
        <Info
          title="National Number"
          text={License?.nationalNumber || "????"}
        />
      </InfoLine>
      <InfoLine>
        <Info title="Class Name" text={License?.className || "????"} />
        <Info
          title="Is Active"
          text={<Active active={License?.isActive} large={false} />}
        />
      </InfoLine>
      <InfoLine>
        <Info title="Gender" text={License?.gender || "????"} />
        <Info
          title="Birth Date"
          text={
            License?.dateOfBirth
              ? FormatDateAsNumber(License.dateOfBirth)
              : "????"
          }
        />
      </InfoLine>
      <InfoLine>
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
      </InfoLine>
      <InfoLine>
        <Info title="Driver Id" text={License?.driverId || "????"} />
        <Info
          title="Is Detained"
          text={<BoolColumn value={License?.isDetained} />}
        />
      </InfoLine>
      <div>
        <Info title="Issue Reason" text={License?.issueReason || "????"} />
      </div>
      <div>
        <Info
          title="Notes"
          text={
            License?.notes || (
              <span className="italic text-gray-600">No notes available</span>
            )
          }
        />
      </div>
    </Card>
  );
}

export default LicenseCard;
