import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getLicense(licenseId) {
  const result = await fetchData(`${BASE_URL}/api/Licenses/${licenseId}`);

  return result.data;
}

export async function IsLicenseExist(personId, licenseClassId) {
  const queryParams = new URLSearchParams({
    personId,
    licenseClassId,
  });

  return (
    await fetchData(`${BASE_URL}/api/Licenses/IsLicenseExist?${queryParams}`, {
      method: "GET",
    })
  ).data;
}
