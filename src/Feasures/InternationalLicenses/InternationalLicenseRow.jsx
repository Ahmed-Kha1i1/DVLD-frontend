import BoolColumn from "../../Core/ui/BoolColumn";
import { FormatDateTime } from "../../Core/utils/FormatUtils";
/* eslint-disable react/prop-types */
function InternationalLicenseRow({ InternationalLicense }) {
  const {
    applicationID,
    createdByUserID,
    driverID,
    expirationDate,
    internationalLicenseID,
    isActive,
    issueDate,
    issuedUsingLocalLicenseID,
    personId,
  } = InternationalLicense;
  return (
    <>
      <div>{internationalLicenseID}</div>
      <div>{applicationID}</div>
      <div>{issuedUsingLocalLicenseID}</div>
      <div>{driverID}</div>
      <div>{personId}</div>
      <div>{FormatDateTime(issueDate)}</div>
      <div>{FormatDateTime(expirationDate)}</div>
      <BoolColumn value={isActive} />
      <div>{createdByUserID}</div>
    </>
  );
}

export default InternationalLicenseRow;
