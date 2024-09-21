import { BASE_URL } from "../Constants";

export async function getDrivers() {
  try {
    let res = await fetch(`${BASE_URL}/api/Drivers/All`);

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function GetDriverLicenses(id) {
  try {
    let res = await fetch(`${BASE_URL}/api/Drivers/${id}/Licenses`);

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function GetDriverInternationalLicenses(id) {
  try {
    let res = await fetch(
      `${BASE_URL}/api/Drivers/${id}/InternationalLicenses`,
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getDriver(id) {
  try {
    let res = await fetch(`${BASE_URL}/api/Drivers/${id}`);

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
