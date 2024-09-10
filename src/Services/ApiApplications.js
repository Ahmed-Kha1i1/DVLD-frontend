import { BASE_URL } from "../Feasures/Constants";

export async function getApplications() {
  try {
    let res = await fetch(`${BASE_URL}/api/LocalApplications/All`);

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
