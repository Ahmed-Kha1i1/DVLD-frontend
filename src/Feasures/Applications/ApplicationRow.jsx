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
    <div className={`grid ${columns} p-1 text-TextColor`}>
      <div>{localApplicationId}</div>
      <div>{className}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <div>{applicationDate}</div>
      <div>{passedTestCount}</div>
      <StatusText type={status} />
    </div>
  );
}

export default ApplicationRow;
