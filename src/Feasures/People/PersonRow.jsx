import Row from "../../GlobalUI/Row";
/* eslint-disable react/prop-types */
function PersonRow({ Person, columns }) {
  const {
    address,
    countryName,
    dateOfBirth,
    email,
    fullName,
    gendor,
    nationalNo,
    personID,
    phone
  } = Person;

  return (
    <Row columns={columns}>
      <div>{personID}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{address}</div>
      <div>{dateOfBirth}</div>
      <div>{countryName}</div>
      <div>{gendor}</div>
    </Row>
  );
}

export default PersonRow;
