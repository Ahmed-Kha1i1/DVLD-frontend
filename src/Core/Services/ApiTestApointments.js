import { BASE_URL, CurrentuserId } from "../../Constants";
import fetchData from "./Fetch";

export async function getTestAppointments(localApplicationId, testTypeId) {
  const queryParams = new URLSearchParams({
    localApplicationId,
    testTypeId,
  });
  const result = await fetchData(
    `${BASE_URL}/api/TestAppointments/All/PerTestType?${queryParams}`,
  );

  return result.data;
}

export async function getTestAppointment(testAppointmentId) {
  const result = await fetchData(
    `${BASE_URL}/api/TestAppointments/${testAppointmentId}`,
  );

  return result.data;
}

export async function addNewTestAppointment({
  localApplicationId,
  testTypeId,
  appointmentDate,
}) {
  const result = await fetchData(`${BASE_URL}/api/TestAppointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      localApplicationId,
      testTypeId,
      createdUserId: CurrentuserId,
      appointmentDate,
    }),
  });
  return result.data;
}

export async function updateTestAppointment({
  testAppointmentId,
  appointmentDate,
}) {
  const data = await fetchData(`${BASE_URL}/api/TestAppointments`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      testAppointmentId,
      createdUserId: CurrentuserId,
      appointmentDate,
    }),
  });
  return data.data;
}
