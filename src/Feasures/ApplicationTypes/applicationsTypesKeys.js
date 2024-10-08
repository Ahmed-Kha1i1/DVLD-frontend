const applicationsTypedetailTypes = {
  ID: "id",
};

const applicationsTypesKeys = {
  all: ["applicationsTypes"],
  lists: () => [...applicationsTypesKeys.all, "list"],
  list: (filter) => [...applicationsTypesKeys.lists(), { filter }],
  details: () => [...applicationsTypesKeys.all, "detail"],
  detail: (type, value) => [
    ...applicationsTypesKeys.details(),
    { type, value },
  ],
};

export { applicationsTypesKeys, applicationsTypedetailTypes };
