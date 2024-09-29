import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getDatainedLicenses() {
  return (await fetchData(`${BASE_URL}/api/DetainedLicenses/All`)).data;
}
