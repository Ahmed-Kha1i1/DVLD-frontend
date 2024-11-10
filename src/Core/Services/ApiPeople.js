import { BASE_URL, defaultPageSize } from "../../Constants";
import { persondetailTypes } from "../../Feasures/People/peopleKeys";
import fetchData, { createFormData } from "./Fetch";

export async function getPeople(
  {
    id = null,
    nationalNumber = null,
    gender = null,
    pageNumber = 1,
    pageSize = defaultPageSize,
    orderBy = "Id",
    orderDirection = "Asc",
    searchQuery = null,
  } = {},
  signal,
) {
  const queryParams = new URLSearchParams();

  if (id) queryParams.append("Id", id);
  if (nationalNumber) queryParams.append("NationalNumber", nationalNumber);
  if (gender) queryParams.append("Gender", gender);
  queryParams.append("PageNumber", pageNumber);
  queryParams.append("PageSize", pageSize);
  queryParams.append("OrderBy", orderBy);
  queryParams.append("OrderDirection", orderDirection);
  if (searchQuery) queryParams.append("SearchQuery", searchQuery);

  return (
    await fetchData(`${BASE_URL}/api/People/All?${queryParams}`, {
      signal,
    })
  ).data;
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
  });
  if (id) queryParams.append("id", id);
  const result = await fetchData(
    `${BASE_URL}/api/People/Unique/NationalNumber?${queryParams}`,
  );

  return { nationalNoUnique: result.data };
}

export async function isEmailUnique(email, id) {
  const queryParams = new URLSearchParams({
    email: email,
  });
  console.log(id);
  if (id) queryParams.append("id", id);

  const result = await fetchData(
    `${BASE_URL}/api/People/Unique/Email?${queryParams}`,
  );

  return { emailUnique: result.data };
}

export async function isPhoneUnique(phone, id) {
  const queryParams = new URLSearchParams({
    phone: phone,
  });
  if (id) queryParams.append("id", id);
  const result = await fetchData(
    `${BASE_URL}/api/People/Unique/Phone?${queryParams}`,
  );

  return { phoneUnique: result.data };
}
