import { BASE_URL, defaultPageSize } from "../../Constants";
import fetchData from "./Fetch";

export const userDataType = {
  full: "application/vnd.user.full+json",
  pref: "application/vnd.user.pref+json",
};

export async function getUsers(
  {
    id = null,
    personId = null,
    username = null,
    isActive = null,
    pageNumber = 1,
    pageSize = defaultPageSize,
    orderBy = "Id",
    orderDirection = "Asc",
    searchQuery = null,
  } = {},
  signal,
) {
  const queryParams = new URLSearchParams();

  if (id) queryParams.append("Id", id);
  if (personId) queryParams.append("PersonId", personId);
  if (username) queryParams.append("Username", username);
  if (isActive !== null) queryParams.append("IsActive", isActive);
  queryParams.append("PageNumber", pageNumber);
  queryParams.append("PageSize", pageSize);
  queryParams.append("OrderBy", orderBy);
  queryParams.append("OrderDirection", orderDirection);
  if (searchQuery) queryParams.append("SearchQuery", searchQuery);

  return (
    await fetchData(`${BASE_URL}/api/Users/All?${queryParams}`, {
      signal,
    })
  ).data;
}

export async function getUser(id, accept = userDataType.full) {
  return (
    await fetchData(`${BASE_URL}/api/Users/${id}`, {
      headers: {
        accept: accept,
      },
    })
  ).data;
}

export async function getPersonByUserId(id) {
  var result = await fetchData(`${BASE_URL}/api/Users/${id}/person`);

  return result.data;
}

export async function addNewUser(user) {
  const result = await fetchData(`${BASE_URL}/api/Users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return result?.data?.UserID;
}

export async function updateUser(UserId, user) {
  const data = await fetchData(`${BASE_URL}/api/Users`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...user, UserId }),
  });
  return data.data;
}

export async function updatePassword(userId, newPassword, oldPassword) {
  const data = await fetchData(`${BASE_URL}/api/Users/UpdatePassword`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newPassword, userId, oldPassword }),
  });
  return data.data;
}

export async function deleteUser(id) {
  const result = await fetchData(`${BASE_URL}/api/Users/${id}`, {
    method: "DELETE",
  });

  return result.data.userId;
}

export async function isUsernameUnique(username, id) {
  const queryParams = new URLSearchParams({
    username: username,
  });
  if (id) queryParams.append("id", id);
  const result = await fetchData(
    `${BASE_URL}/api/Users/Unique/Username?${queryParams}`,
  );
  return { usernameUnique: result.data };
}

export async function isPasswordValid(userId, currentPassword) {
  const queryParams = new URLSearchParams({
    userId,
    currentPassword,
  });

  const result = await fetchData(
    `${BASE_URL}/api/Users/PasswordValid/?${queryParams}`,
  );
  return result.data;
}

export async function isUserExistByPersonId(personId) {
  const result = await fetchData(
    `${BASE_URL}/api/Users/Exists/Person/${personId}`,
  );

  return { exists: result.data };
}
