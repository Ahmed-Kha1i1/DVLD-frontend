import { BASE_URL } from "../Constants";
import fetchData from "./Fetch";

export async function getTestTypes() {
  return (await fetchData(`${BASE_URL}/api/TestTypes/All`)).data;
}
