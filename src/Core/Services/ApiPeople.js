import { BASE_URL } from "../../Constants";
import { persondetailTypes } from "../../Feasures/People/peopleKeys";
import fetchData, { createFormData } from "./Fetch";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function getPeople() {
  const result = await fetchData(`${BASE_URL}/api/People/All`);

  return result.data;
}

export async function getPerson(identifier, type = persondetailTypes.ID) {
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

export async function getDriverId(personId) {
  return (await fetchData(`${BASE_URL}/api/People/${personId}/DriverId`)).data;
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
  return result.data;
}

export async function addNewPerson(person) {
  let formData = createFormData(person);
  const result = await fetchData(`${BASE_URL}/api/People`, {
    method: "POST",
    body: formData,
  });
  return {
    id: result?.data,
    status: result.status,
    message: result.message ? result.message : null,
  };
}

export async function updatePerson(PersonId, person) {
  console.log(person);
  let formData = createFormData(person);
  formData.append("PersonId", PersonId);
  const result = await fetchData(`${BASE_URL}/api/People`, {
    method: "PUT",
    body: formData,
  });
  return result.data;
}

export async function updateContactPerson(id, contactPerson) {
  const result = await fetchData(`${BASE_URL}/api/People/UpdateContact/${id}`, {
    method: "PUT",
    body: contactPerson,
  });
  return result.data;
}

export async function isNationalNoUnique(nationalNo, id) {
  const queryParams = new URLSearchParams({
    nationalNumber: nationalNo,
    id: id ? id.toString() : null,
  });

  const result = await fetchData(
    `${BASE_URL}/api/People/Unique/NationalNumber?${queryParams}`,
  );

  return { nationalNoUnique: result.data };
}

export async function isEmailUnique(email, id) {
  const queryParams = new URLSearchParams({
    email: email,
    id: id ? id.toString() : null,
  });

  const result = await fetchData(
    `${BASE_URL}/api/People/Unique/Email?${queryParams}`,
  );

  return { emailUnique: result.data };
}

export async function isPhoneUnique(phone, id) {
  const queryParams = new URLSearchParams({
    phone: phone,
    id: id ? id.toString() : null,
  });

  const result = await fetchData(
    `${BASE_URL}/api/People/Unique/Phone?${queryParams}`,
  );

  return { phoneUnique: result.data };
}
