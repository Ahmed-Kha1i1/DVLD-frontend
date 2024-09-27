import { BASE_URL } from "../Constants";
import fetchData from "./Fetch";

export async function getUsers() {
  return (await fetchData(`${BASE_URL}/api/Users/All`)).data;
}

export async function getUser(id) {
  return (await fetchData(`${BASE_URL}/api/Users/${id}`)).data;
}

export async function deleteUser(id) {
  return (
    await fetchData(`${BASE_URL}/api/Users/${id}`, {
      method: "DELETE",
    })
  ).data;
}
