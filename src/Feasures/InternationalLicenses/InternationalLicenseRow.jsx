import BoolColumn from "../../GlobalUI/BoolColumn";
import { FormatDateTime } from "../../Utils/helpers";
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
    issuedUsingLocalLicenseID
  } = InternationalLicense;
  return (
    <>
      <div>{internationalLicenseID}</div>
      <div>{applicationID}</div>
      <div>{issuedUsingLocalLicenseID}</div>
      <div>{driverID}</div>
      <div>{FormatDateTime(issueDate)}</div>
      <div>{FormatDateTime(expirationDate)}</div>
      <BoolColumn value={isActive} />
      <div>{createdByUserID}</div>
    </>
  );
}

export default InternationalLicenseRow;
