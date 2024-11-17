const userdetailTypes = {
  ID: "id",
  USERNAME: "username",
};

const usersKeys = {
  all: ["users"],
  lists: () => [...usersKeys.all, "list"],
  list: (filter) => [...usersKeys.lists(), { filter }],
  details: () => [...usersKeys.all, "detail"],
  fullDetails: () => [...usersKeys.details(), "full"],
  prefDetails: () => [...usersKeys.details(), "pref"],
  detail: (type, value, isFull = true) => [
    ...(isFull ? usersKeys.fullDetails() : usersKeys.prefDetails()),
    { type, value },
  ],
  currentUser: () => [...usersKeys.fullDetails(), "current-user"],
};

export { usersKeys, userdetailTypes };
