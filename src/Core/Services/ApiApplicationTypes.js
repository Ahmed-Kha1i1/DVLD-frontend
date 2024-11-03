import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getApplicationTypes() {
  return (await fetchData(`${BASE_URL}/api/ApplicationTypes/All`)).data;
}

export async function getApplicationType(id) {
  return (await fetchData(`${BASE_URL}/api/ApplicationTypes/${id}`)).data;
}

export async function updateApplicationType(
  applicationTypeId,
  applicationType,
) {
  const data = await fetchData(`${BASE_URL}/api/ApplicationTypes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...applicationType, applicationTypeId }),
  });
  return data.data;
}
