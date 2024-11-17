import { BASE_URL, sessoin } from "../../Constants";

export default async function fetchData(url, options = {}) {
  try {
    setToken(options);

    let res = await fetch(url, options);

    if (res.status === 401 && !options._retry) {
      res = refershTokentry(url, options);
    }

    const data = await res.json?.();

    if (!res.ok) throw new Error(data?.message || "An error occurred");

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

function setToken(options) {
  const sessionData = localStorage.getItem(sessoin);
  let accessToken;
  if (sessionData) {
    const sessionObject = JSON.parse(sessionData);

    accessToken = sessionObject.accessToken;
  }

  if (accessToken)
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  options.credentials = "include";
}

async function refershTokentry(url, options) {
  options._retry = true;

  let res = await fetch(`${BASE_URL}/api/Auth/RefreshToken`, {
    method: "POST",
  });

  const result = res.json();

  const newSessoin = result.data;

  if (!newSessoin) {
    localStorage.removeItem(sessoin);
    window.location.href = "/login";
    return;
  }

  localStorage.setItem(sessoin, JSON.stringify(newSessoin));
  options.headers.Authorization = `Bearer ${newSessoin.accessToken}`;
  return await fetch(url, options);
}

export function createFormData(object) {
  let formData = new FormData();
  for (let key in object) {
    formData.append(key, object[key]);
  }
  return formData;
}
