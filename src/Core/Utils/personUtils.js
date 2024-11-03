import { BASE_URL } from "../../Constants";

export function generateDefault(personToEdit) {
  const {
    personID: editId,
    dateOfBirth,
    countryName,
    imageName,
    ...editValue
  } = personToEdit;

  if (!editId) return {};

  const formattedDateOfBirth = dateOfBirth
    ? new Date(dateOfBirth).toISOString().split("T")[0]
    : undefined;

  const defaultPerosn = {
    nationalityCountry: countryName,
    dateOfBirth: formattedDateOfBirth,
    image: imageName
      ? `${BASE_URL}/api/Files/GetImage/${imageName}`
      : undefined,
    ...editValue,
  };
  return { editId, defaultPerosn };
}

export function generateNewPerson(person, CountriesData) {
  const countryId = CountriesData.find(
    (country) =>
      country.countryName.toLowerCase() ===
      person.nationalityCountry.toLowerCase(),
  )?.countryID;

  const image =
    typeof person.image === "object" && person.image.length > 0
      ? person.image[0]
      : null;

  const newPerson = {
    gender: person.gender,
    dateOfBirth: person.dateOfBirth,
    firstName: person.firstName.trim(),
    secondName: person.secondName.trim(),
    thirdName: person.thirdName ? person.thirdName.trim() : "", // Assuming thirdName can be optional
    lastName: person.lastName.trim(),
    nationalNo: person.nationalNo.trim(),
    nationalityCountryID: countryId,
    address: person.address.trim(),
    phone: person.phone.trim(),
    email: person.email.trim(),
    imageFile: image,
  };

  return newPerson;
}
