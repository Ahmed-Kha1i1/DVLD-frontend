/* eslint-disable react/prop-types */
import BoolColumn from "../../Core/ui/BoolColumn";
import { FormatDateTime } from "../../Core/Utils/FormatUtils";

function DriverLicenseRow({ driverLicense }) {
  const {
    licenseID,
    applicationID,
    className,
    issueDate,
    expirationDate,
    isActive,
  } = driverLicense;

  return (
    <>
      <div>{licenseID}</div>
      <div>{applicationID}</div>
      <div>{className}</div>
      <div>{FormatDateTime(issueDate)}</div>
      <div>{FormatDateTime(expirationDate)}</div>
      <BoolColumn value={isActive} />
    </>
  );
}

export default DriverLicenseRow;
