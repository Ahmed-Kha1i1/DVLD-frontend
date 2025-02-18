import StatusText from "../../Core/ui/StatusText";
import { FormatDateTime } from "../../Core/utils/FormatUtils";

/* eslint-disable react/prop-types */
function ApplicationRow({ application }) {
  const {
    localApplicationId,
    className,
    nationalNo,
    fullName,
    applicationDate,
    passedTestCount,
    status,
    personId,
  } = application;

  return (
    <>
      <div>{localApplicationId}</div>
      <div>{className}</div>
      <div>{nationalNo}</div>
      <div>{personId}</div>
      <div>{fullName}</div>
      <div>{FormatDateTime(applicationDate)}</div>
      <div>{passedTestCount}</div>
      <StatusText type={status} />
    </>
  );
}

export default ApplicationRow;
