import { BASE_URL, CurrentuserId } from "../../Constants";
import fetchData from "./Fetch";

export async function addNewTest({ testAppointmentId, testResult, notes }) {
  const result = await fetchData(`${BASE_URL}/api/Tests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      testAppointmentId,
      result: testResult,
      notes,
      CreatedUserId: CurrentuserId,
    }),
  });

  return result.data;
}
