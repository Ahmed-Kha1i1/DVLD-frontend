/* eslint-disable react/prop-types */
function PersonRow({ Person }) {
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
  var date = new Date(dateOfBirth);

  return (
    <>
      <div>{personID}</div>
      <div>{nationalNo}</div>
      <div>{fullName}</div>
      <div className="text-sky-600">{email}</div>
      <div>{phone}</div>
      <div>{address}</div>
      <div>{date.toLocaleDateString()}</div>
      <div>{countryName}</div>
      <div>{gendor}</div>
    </>
  );
}

export default PersonRow;
