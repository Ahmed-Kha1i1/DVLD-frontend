import { FormatDateAsNumber } from "../../Utils/helpers";

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
    gendor,
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
      <div>{gendor}</div>
    </>
  );
}

export default PersonRow;
