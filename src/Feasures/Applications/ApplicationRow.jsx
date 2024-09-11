import StatusText from "../../GlobalUI/StatusText";
import { FormatDateTime } from "../../Utils/helpers";

/* eslint-disable react/prop-types */
function ApplicationRow({ application }) {
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
    <>
      <div>{localApplicationId}</div>
      <div>{className}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <div>{FormatDateTime(applicationDate)}</div>
      <div>{passedTestCount}</div>
      <StatusText type={status} />
    </>
  );
}

export default ApplicationRow;
