import { BASE_URL } from "../Constants";

export async function getUsers() {
  try {
    let res = await fetch(`${BASE_URL}/api/Users/All`);

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUser(id) {
  try {
    let res = await fetch(`${BASE_URL}/api/Users/${id}`);

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteUser(id) {
  try {
    let res = await fetch(`${BASE_URL}/api/Users/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data.message;
  } catch (error) {
    throw new Error(error.message);
  }
}
