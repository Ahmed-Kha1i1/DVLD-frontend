import { BASE_URL } from "../Constants";
import fetchData from "./Fetch";

export async function getApplications() {
  return (await fetchData(`${BASE_URL}/api/LocalApplications/All`)).data;
}
