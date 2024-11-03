import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getAllLicnseClasses() {
  const result = await fetchData(`${BASE_URL}/api/LicenseClasses/All`);

  return result.data;
}
