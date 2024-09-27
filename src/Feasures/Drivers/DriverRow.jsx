import { FormatDateTime } from "../../Utils/FormatUtils";
/* eslint-disable react/prop-types */
function DriverRow({ Driver }) {
  const {
    createdDate,
    driverID,
    fullName,
    nationalNo,
    numberofActiveLicenses,
    personID,
  } = Driver;

  return (
    <>
      <div>{driverID}</div>
      <div>{personID}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <div>{FormatDateTime(createdDate)}</div>
      <div>{numberofActiveLicenses}</div>
    </>
  );
}

export default DriverRow;
