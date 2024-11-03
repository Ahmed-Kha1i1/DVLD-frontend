import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getTestTypes() {
  return (await fetchData(`${BASE_URL}/api/TestTypes/All`)).data;
}

export async function getTestType(id) {
  return (await fetchData(`${BASE_URL}/api/TestTypes/${id}`)).data;
}

export async function updateTestType(testTypeId, testType) {
  const data = await fetchData(`${BASE_URL}/api/TestTypes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...testType, testTypeId }),
  });
  return data.data;
}
