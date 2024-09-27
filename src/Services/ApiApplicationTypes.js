import { BASE_URL } from "../Constants";
import fetchData from "./Fetch";

export async function getApplicationTypes() {
  return (await fetchData(`${BASE_URL}/api/ApplicationTypes/All`)).data;
}
