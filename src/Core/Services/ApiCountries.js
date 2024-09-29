import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getCountries() {
  let data = (await fetchData(`${BASE_URL}/api/Countries/All`)).data;

  return data;
}
