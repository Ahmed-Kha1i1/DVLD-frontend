import { BASE_URL } from "../Constants";
import fetchData from "./Fetch";

export async function getInternationalLicenses() {
  return (await fetchData(`${BASE_URL}/api/InternationalLicenses/All`)).data;
}
