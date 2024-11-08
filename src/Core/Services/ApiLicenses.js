import { BASE_URL, CurrentuserId } from "../../Constants";
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

export async function ReplaceLicense(OldLicenseId, IssueReason) {
  const result = await fetchData(`${BASE_URL}/api/Licenses/Replace`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      OldLicenseId,
      IssueReason,
      CreatedUserId: CurrentuserId,
    }),
  });
  return result.data;
}

export async function RenewLicense(oldLicenseId, notes) {
  const result = await fetchData(`${BASE_URL}/api/Licenses/Renew`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      oldLicenseId,
      notes,
      CreatedUserId: CurrentuserId,
    }),
  });
  return result.data;
}
