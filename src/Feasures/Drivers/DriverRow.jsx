import Row from "../../GlobalUI/Row";
/* eslint-disable react/prop-types */
function DriverRow({ Driver, columns }) {
  const {
    createdDate,
    driverID,
    fullName,
    nationalNo,
    numberofActiveLicenses,
    personID
  } = Driver;

  return (
    <Row columns={columns}>
      <div>{driverID}</div>
      <div>{personID}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <div>{createdDate}</div>
      <div>{numberofActiveLicenses}</div>
    </Row>
  );
}

export default DriverRow;
