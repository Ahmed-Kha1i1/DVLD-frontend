import { BASE_URL } from "../../Constants";
import { persondetailTypes } from "../../Feasures/People/peopleKeys";
import fetchData, { createFormData } from "./Fetch";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function getPeople() {
  return (await fetchData(`${BASE_URL}/api/People/All`)).data;
}

export async function getPerson(identifier, type = persondetailTypes.ID) {
  console.log("get person by: ", identifier, type);
  if (type === persondetailTypes.ID) {
    return await getPersonById(identifier);
  } else if (type === persondetailTypes.NATIONAL_NUMBER) {
    return await getPersonByNationalNo(identifier);
  } else {
    throw new Error(`Unsupported fetch type: ${type}`);
  }
}

export async function getPersonById(id) {
  return (await fetchData(`${BASE_URL}/api/People/${id}`)).data;
}

export async function getPersonByNationalNo(nationalNumber) {
  return (
    await fetchData(`${BASE_URL}/api/People/NationalNumber/${nationalNumber}`)
  ).data;
}

export async function deletePerson(id) {
  const result = await fetchData(`${BASE_URL}/api/People/${id}`, {
    method: "DELETE",
  });
  return result.data.personId;
}

export async function addNewPerson(person) {
  let formData = createFormData(person);
  const result = await fetchData(`${BASE_URL}/api/People`, {
    method: "POST",
    body: formData,
  });
  return {
    id: result?.data?.personID,
    status: result.status,
    message: result.message ? result.message : null,
  };
}

export async function updatePerson(id, person) {
  let formData = createFormData(person);
  const data = await fetchData(`${BASE_URL}/api/People/${id}`, {
    method: "PUT",
    body: formData,
  });
  return data.data;
}

export async function updateContactPerson(id, contactPerson) {
  const data = await fetchData(`${BASE_URL}/api/People/UpdateContact/${id}`, {
    method: "PUT",
    body: contactPerson,
  });
  return data.data;
}

export async function isNationalNoUnique(nationalNo, id) {
  const data = await fetchData(
    `${BASE_URL}/api/People/Unique/NationalNo/${nationalNo}${id && `?id=${id}`}`,
  );
  return { nationalNoUnique: data.data };
}

export async function isEmailUnique(email, id) {
  const data = await fetchData(
    `${BASE_URL}/api/People/Unique/Email/${email}${id && `?id=${id}`}`,
  );
  return { emailUnique: data.data };
}

export async function isPhoneUnique(phone, id) {
  const data = await fetchData(
    `${BASE_URL}/api/People/Unique/Phone/${phone}${id && `?id=${id}`}`,
  );
  return { phoneUnique: data.data };
}
