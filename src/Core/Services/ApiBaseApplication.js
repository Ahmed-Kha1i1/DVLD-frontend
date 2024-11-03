import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function GetActiveApplicationId(personId, licenseClassId) {
  const queryParams = new URLSearchParams({
    personId,
    licenseClassId,
  });

  return (
    await fetchData(
      `${BASE_URL}/api/Applications/ActiveApplicationId?${queryParams}`,
      {
        method: "GET",
      },
    )
  ).data;
}
