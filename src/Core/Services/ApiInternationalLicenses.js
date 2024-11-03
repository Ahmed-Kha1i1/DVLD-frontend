import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getInternationalLicenses() {
  return (await fetchData(`${BASE_URL}/api/InternationalLicenses/All`)).data;
}

export async function getInternationalLicenseApplication(Id) {
  return (
    await fetchData(`${BASE_URL}/api/InternationalLicenses/${Id}/application`)
  ).data;
}

export async function getInternationalLicense(Id) {
  return (await fetchData(`${BASE_URL}/api/InternationalLicenses/${Id}`)).data;
}

export async function addInternationalLicense(licenseId, createdUser) {
  const result = await fetchData(`${BASE_URL}/api/InternationalLicenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ licenseId, createdUser }),
  });
  return result.data;
}
