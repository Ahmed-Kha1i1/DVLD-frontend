import { BASE_URL, CurrentuserId, defaultPageSize } from "../../Constants";
import { detainedLicensedetailTypes } from "../../Feasures/DetainedLicenses/detainedLicensesKeys";
import fetchData from "./Fetch";

export async function getDatainedLicenses(
  {
    id = null,
    nationalNumber = null,
    isReleased = null,
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
  if (isReleased !== null) queryParams.append("IsReleased", isReleased);
  queryParams.append("PageNumber", pageNumber);
  queryParams.append("PageSize", pageSize);
  queryParams.append("OrderBy", orderBy);
  queryParams.append("OrderDirection", orderDirection);
  if (searchQuery) queryParams.append("SearchQuery", searchQuery);

  return (
    await fetchData(`${BASE_URL}/api/DetainedLicenses/All?${queryParams}`, {
      signal,
    })
  ).data;
}

export async function getDatainedLicense(
  identifier,
  type = detainedLicensedetailTypes.ID,
) {
  if (type === detainedLicensedetailTypes.ID) {
    return await getDatainedLicenseById(identifier);
  } else if (type === detainedLicensedetailTypes.LICENSE_ID) {
    return await getDatainedLicenseByLicenseId(identifier);
  } else {
    throw new Error(`Unsupported fetch type: ${type}`);
  }
}

export async function getDatainedLicenseById(detainId) {
  return (await fetchData(`${BASE_URL}/api/DetainedLicenses/${detainId}`)).data;
}

export async function getDatainedLicenseByLicenseId(licenseId) {
  return (
    await fetchData(`${BASE_URL}/api/DetainedLicenses/ByLicenseId/${licenseId}`)
  ).data;
}

export async function isLicenseDetained(licenseId) {
  return (
    await fetchData(`${BASE_URL}/api/DetainedLicenses/IsDetained/${licenseId}`)
  ).data;
}

export async function DetainLicense(licenseId, fineFees) {
  const result = await fetchData(`${BASE_URL}/api/DetainedLicenses/Detain`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      licenseId,
      fineFees,
      createdByUserID: CurrentuserId,
    }),
  });
  return result?.data;
}

export async function ReleaseLicense(licenseId) {
  const result = await fetchData(`${BASE_URL}/api/DetainedLicenses/Release`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ licenseId, releasedByUserID: CurrentuserId }),
  });
  return result.data;
}
