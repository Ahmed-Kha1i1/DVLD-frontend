import { BASE_URL } from "../../Constants";
import { driverdetailTypes } from "../../Feasures/Drivers/driversKeys";
import fetchData from "./Fetch";

export async function getDrivers() {
  return (await fetchData(`${BASE_URL}/api/Drivers/All`)).data;
}

export async function getPersonByDriverId(id) {
  var result = await fetchData(`${BASE_URL}/api/Drivers/${id}/person`);

  return result.data;
}

export async function GetDriverLicenses(id) {
  return (await fetchData(`${BASE_URL}/api/Drivers/${id}/Licenses`)).data;
}

export async function GetDriverInternationalLicenses(id) {
  return (
    await fetchData(`${BASE_URL}/api/Drivers/${id}/InternationalLicenses`)
  ).data;
}

export async function getDriverById(id) {
  return (await fetchData(`${BASE_URL}/api/Drivers/${id}`)).data;
}

export async function getDriverByPersonId(id) {
  return (await fetchData(`${BASE_URL}/api/Drivers/ByPersonId/${id}`)).data;
}

export async function getDriver(identifier, type = driverdetailTypes.ID) {
  if (type === driverdetailTypes.ID) {
    return await getDriverById(identifier);
  } else if (type === driverdetailTypes.PERSON_ID) {
    return await getDriverByPersonId(identifier);
  } else {
    throw new Error(`Unsupported fetch type: ${type}`);
  }
}
