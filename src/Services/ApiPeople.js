import { BASE_URL } from "../Constants";
import fetchData, { createFormData } from "./Fetch";

export async function getPeople() {
  return (await fetchData(`${BASE_URL}/api/People/All`)).data;
}

export async function getPerson(id) {
  return (await fetchData(`${BASE_URL}/api/People/${id}`)).data;
}

export async function deletePerson(id) {
  return (
    await fetchData(`${BASE_URL}/api/People/${id}`, {
      method: "DELETE",
    })
  ).message;
}

export async function addNewPerson(person) {
  let formData = createFormData(person);
  const data = await fetchData(`${BASE_URL}/api/People`, {
    method: "POST",
    body: formData,
  });
  return {
    id: data.data?.personID,
    status: data.status,
    message: data.message ? data.message : null,
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

export async function isNationalNoUnique(nationalNo) {
  const data = await fetchData(
    `${BASE_URL}/api/People/Unique/NationalNo/${nationalNo}`,
  );
  return { nationalNoUnique: data.data };
}

export async function isEmailUnique(email) {
  const data = await fetchData(`${BASE_URL}/api/People/Unique/Email/${email}`);
  return { emailUnique: data.data };
}

export async function isPhoneUnique(phone) {
  const data = await fetchData(`${BASE_URL}/api/People/Unique/Phone/${phone}`);
  return { phoneUnique: data.data };
}
