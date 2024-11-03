import { FormatDateAsNumber } from "../../Core/Utils/FormatUtils";

/* eslint-disable react/prop-types */
function PersonRow({ Person }) {
  const {
    address,
    countryName,
    dateOfBirth,
    email,
    fullName,
    gender,
    nationalNo,
    personID,
    phone,
  } = Person;

  return (
    <>
      <div>{personID}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <div className>{email}</div>
      <div>{phone}</div>
      <div>{address}</div>
      <div>{FormatDateAsNumber(dateOfBirth)}</div>
      <div>{countryName}</div>
      <div>{gender}</div>
    </>
  );
}

export default PersonRow;
