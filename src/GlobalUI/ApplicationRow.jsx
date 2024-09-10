import StatusText from "./StatusText";

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
    <li className={`grid ${columns} p-1`}>
      <div>{localApplicationId}</div>
      <div>{className}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <div>{applicationDate}</div>
      <div>{passedTestCount}</div>
      <StatusText type={status} />
    </li>
  );
}

export default ApplicationRow;
