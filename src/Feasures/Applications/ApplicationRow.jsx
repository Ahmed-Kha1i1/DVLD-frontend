import Row from "../../GlobalUI/Row";
import StatusText from "../../GlobalUI/StatusText";

/* eslint-disable react/prop-types */
function ApplicationRow({ application, columns }) {
  const {
    localApplicationId,
    className,
    nationalNo,
    fullName,
    applicationDate,
    passedTestCount,
    status
  } = application;

  return (
    <Row columns={columns}>
      <div>{localApplicationId}</div>
      <div>{className}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <div>{applicationDate}</div>
      <div>{passedTestCount}</div>
      <StatusText type={status} />
    </Row>
  );
}

export default ApplicationRow;
