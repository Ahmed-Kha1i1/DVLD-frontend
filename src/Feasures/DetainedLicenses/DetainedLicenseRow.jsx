import Row from "../../GlobalUI/Row";
/* eslint-disable react/prop-types */
function DetainedLicenseRow({ DetainedLicense, columns }) {
  const {
    detainID,
    fineFees,
    detainDate,
    fullName,
    isReleased,
    licenseID,
    nationalNo,
    releaseApplicationID,
    releaseDate
  } = DetainedLicense;
  return (
    <Row columns={columns}>
      <div>{detainID}</div>
      <div>{licenseID}</div>
      <div>{detainDate}</div>
      <div>{fineFees}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <div>{isReleased.toString()}</div>
      <div>{releaseDate ?? "NULL"}</div>
      <div>{releaseApplicationID ?? "NULL"}</div>
    </Row>
  );
}

export default DetainedLicenseRow;
