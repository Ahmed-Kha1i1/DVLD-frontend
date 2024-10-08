import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getDrivers() {
  return (await fetchData(`${BASE_URL}/api/Drivers/All`)).data;
}

export async function GetDriverLicenses(id) {
  return (await fetchData(`${BASE_URL}/api/Drivers/${id}/Licenses`)).data;
}

export async function GetDriverInternationalLicenses(id) {
  return (
    await fetchData(`${BASE_URL}/api/Drivers/${id}/InternationalLicenses`)
  ).data;
}

export async function getDriver(id) {
  return (await fetchData(`${BASE_URL}/api/Drivers/${id}`)).data;
}

export async function getPersonByDriverId(id) {
  return (await fetchData(`${BASE_URL}/api/Drivers/${id}`)).data;
}
