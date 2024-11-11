import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getStatistics(startDate = null, endDate = null) {
  const queryParams = new URLSearchParams();
  if (startDate) queryParams.append("startDate", startDate);
  if (endDate) queryParams.append("endDate", endDate);

  return (await fetchData(`${BASE_URL}/api/Statistics/All?${queryParams}`))
    .data;
}
