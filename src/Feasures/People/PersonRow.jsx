import { FormatDateAsNumber } from "../../Core/utils/FormatUtils";

/* eslint-disable react/prop-types */
function PersonRow({ Person }) {
  const {
    address,
    countryName,
    dateOfBirth,
    email,
    firstName,
    secondName,
    thirdName,
    lastName,
    gender,
    nationalNo,
    personID,
    phone,
  } = Person;

  return (
    <>
      <div>{personID}</div>
      <div>{nationalNo}</div>
      <div>
        {`${firstName} ${secondName} ${
          thirdName ? thirdName : " "
        } ${lastName}`}
      </div>
      <div className="text-sky-600">{email}</div>
      <div>{phone}</div>
      <div>{address}</div>
      <div>{FormatDateAsNumber(dateOfBirth)}</div>
      <div>{countryName}</div>
      <div>{gender}</div>
    </>
  );
}

export default PersonRow;
