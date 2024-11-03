import { BASE_URL, CurrentuserId } from "../../Constants";
import fetchData from "./Fetch";

export const applicationDataType = {
  full: "application/vnd.LocalApplication.full+json",
  pref: "application/vnd.LocalApplication.pref+json",
};
export async function getApplications() {
  return (await fetchData(`${BASE_URL}/api/LocalApplications/All`)).data;
}

export async function GetActiveLicenseId(localApplicationId) {
  return (
    await fetchData(
      `${BASE_URL}/api/LocalApplications/${localApplicationId}/ActiveLicenseId`,
    )
  ).data;
}

export async function getApplication(
  localApplicationId,
  accept = applicationDataType.full,
) {
  return (
    await fetchData(`${BASE_URL}/api/LocalApplications/${localApplicationId}`, {
      headers: {
        accept: accept,
      },
    })
  ).data;
}

export async function getApplicationPerTestType(
  localApplicationId,
  testTypeId,
) {
  const queryParams = new URLSearchParams({
    localApplicationId,
    testTypeId,
  });
  const result = await fetchData(
    `${BASE_URL}/api/LocalApplications/PerTestType?${queryParams}`,
  );

  return result.data;
}

export async function doesAttendTestType(localApplicationId, testTypeId) {
  const queryParams = new URLSearchParams({
    localApplicationId,
    testTypeId,
  });
  const result = await fetchData(
    `${BASE_URL}/api/LocalApplications/TestType/AttendanceCheck?${queryParams}`,
  );

  return result.data;
}

export async function doesPassPreviousTest(localApplicationId, testTypeId) {
  const queryParams = new URLSearchParams({
    localApplicationId,
    testTypeId,
  });
  const result = await fetchData(
    `${BASE_URL}/api/LocalApplications/TestType/PreviousPassCheck?${queryParams}`,
  );

  return result.data;
}

export async function doesPassTestType(localApplicationId, testTypeId) {
  const queryParams = new URLSearchParams({
    localApplicationId,
    testTypeId,
  });
  const result = await fetchData(
    `${BASE_URL}/api/LocalApplications/TestType/PassCheck?${queryParams}`,
  );

  return result.data;
}

export async function isThereAnActiveScheduledTest(
  localApplicationId,
  testTypeId,
) {
  const queryParams = new URLSearchParams({
    localApplicationId,
    testTypeId,
  });
  const result = await fetchData(
    `${BASE_URL}/api/LocalApplications/TestType/ActiveScheduledCheck?${queryParams}`,
  );

  return result.data;
}

export async function addNewApplication(personId, licenseClassId) {
  const result = await fetchData(`${BASE_URL}/api/LocalApplications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      licenseClassId,
      personId,
      userId: CurrentuserId,
    }),
  });
  return result?.data?.UserID;
}

export async function updateApplication(LocalApplicationId, licenseClassId) {
  const data = await fetchData(`${BASE_URL}/api/LocalApplications`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      licenseClassId,
      localApplicationId: LocalApplicationId,
      userId: CurrentuserId,
    }),
  });
  return data.data;
}

export async function deleteApplication(LocalApplicationId) {
  const result = await fetchData(
    `${BASE_URL}/api/LocalApplications/${LocalApplicationId}`,
    {
      method: "DELETE",
    },
  );
  return result.data;
}

export async function cancelApplication(LocalApplicationId) {
  const result = await fetchData(
    `${BASE_URL}/api/LocalApplications/${LocalApplicationId}/Cancel`,
    {
      method: "PUT",
    },
  );
  return result.data;
}

export async function IssueLicense(LocalApplicationId, notes) {
  const result = await fetchData(`${BASE_URL}/api/LocalApplications/issue`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      LocalApplicationId,
      notes: notes ? notes : "",
      userId: CurrentuserId,
    }),
  });
  return result.data;
}
