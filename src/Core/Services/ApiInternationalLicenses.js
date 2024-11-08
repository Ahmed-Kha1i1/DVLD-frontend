import { BASE_URL, CurrentuserId, defaultPageSize } from "../../Constants";
import fetchData from "./Fetch";

export async function getInternationalLicenses(
  {
    id = null,
    driverId = null,
    licenseId = null,
    isActive = null,
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
  if (driverId) queryParams.append("DriverId", driverId);
  if (licenseId) queryParams.append("LicenseId", licenseId);
  if (isActive !== null) queryParams.append("IsActive", isActive);
  queryParams.append("PageNumber", pageNumber);
  queryParams.append("PageSize", pageSize);
  queryParams.append("OrderBy", orderBy);
  queryParams.append("OrderDirection", orderDirection);
  if (searchQuery) queryParams.append("SearchQuery", searchQuery);

  return (
    await fetchData(
      `${BASE_URL}/api/InternationalLicenses/All?${queryParams}`,
      {
        signal,
      },
    )
  ).data;
}

export async function getInternationalLicenseApplication(Id) {
  return (
    await fetchData(`${BASE_URL}/api/InternationalLicenses/${Id}/application`)
  ).data;
}

export async function getInternationalLicense(Id) {
  return (await fetchData(`${BASE_URL}/api/InternationalLicenses/${Id}`)).data;
}

export async function addInternationalLicense(licenseId) {
  const result = await fetchData(`${BASE_URL}/api/InternationalLicenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ licenseId, CreatedUserId: CurrentuserId }),
  });
  return result.data;
}
