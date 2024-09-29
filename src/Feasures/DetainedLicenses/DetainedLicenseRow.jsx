import BoolColumn from "../../Core/ui/BoolColumn";
import { formatCurrency, FormatDateTime } from "../../Core/utils/FormatUtils";
/* eslint-disable react/prop-types */
function DetainedLicenseRow({ DetainedLicense }) {
  const {
    detainID,
    fineFees,
    detainDate,
    fullName,
    isReleased,
    licenseID,
    nationalNo,
    releaseApplicationID,
    releaseDate,
  } = DetainedLicense;
  return (
    <>
      <div>{detainID}</div>
      <div>{licenseID}</div>
      <div>{FormatDateTime(detainDate)}</div>
      <div>{formatCurrency(fineFees)}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <BoolColumn value={isReleased} />
      <div>{releaseDate ? FormatDateTime(releaseDate) : ""}</div>
      <div>{releaseApplicationID ?? ""}</div>
    </>
  );
}

export default DetainedLicenseRow;
