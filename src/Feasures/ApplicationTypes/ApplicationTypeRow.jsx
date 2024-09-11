import Row from "../../GlobalUI/Row";
/* eslint-disable react/prop-types */
function ApplicationTypeRow({ ApplicationType, columns }) {
  const { applicationTypeID, applicationTypeTitle, applicationFees } =
    ApplicationType;

  return (
    <Row columns={columns}>
      <div>{applicationTypeID}</div>
      <div>{applicationTypeTitle}</div>
      <div>{applicationFees}</div>
    </Row>
  );
}

export default ApplicationTypeRow;
