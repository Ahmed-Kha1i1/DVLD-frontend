import Row from "../../GlobalUI/Row";
/* eslint-disable react/prop-types */
function InternationalLicenseRow({ InternationalLicense, columns }) {
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
    <Row columns={columns}>
      <div>{internationalLicenseID}</div>
      <div>{applicationID}</div>
      <div>{issuedUsingLocalLicenseID}</div>
      <div>{driverID}</div>
      <div>{issueDate}</div>
      <div>{expirationDate}</div>
      <div>{isActive.toString()}</div>
      <div>{createdByUserID}</div>
    </Row>
  );
}

export default InternationalLicenseRow;
