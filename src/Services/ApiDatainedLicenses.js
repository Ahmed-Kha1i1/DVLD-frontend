import { BASE_URL } from "../Constants";

export async function getDatainedLicenses() {
  try {
    let res = await fetch(`${BASE_URL}/api/DetainedLicenses/All`);

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
