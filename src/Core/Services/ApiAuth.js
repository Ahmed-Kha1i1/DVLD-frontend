import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";
export async function getAccessTokon({ email, password }) {
  return (
    await fetchData(`${BASE_URL}/api/Auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
  ).data;
}

export async function refreshToken() {
  return (
    await fetchData(`${BASE_URL}/api/Auth/RefreshToken`, {
      method: "POST",
    })
  ).data;
}

export async function revokeToken() {
  return (
    await fetchData(`${BASE_URL}/api/Auth/RevokeToken`, {
      method: "POST",
    })
  ).data;
}
