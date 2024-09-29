export default async function fetchData(url, options = {}) {
  try {
    let res = await fetch(url, options);

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export function createFormData(object) {
  let formData = new FormData();
  for (let key in object) {
    formData.append(key, object[key]);
  }
  return formData;
}
