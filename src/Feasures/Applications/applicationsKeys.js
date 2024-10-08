const applicationdetailTypes = {
  ID: "id",
};

const applicationsKeys = {
  all: ["applications"],
  lists: () => [...applicationsKeys.all, "list"],
  list: (filter) => [...applicationsKeys.lists(), { filter }],
  details: () => [...applicationsKeys.all, "detail"],
  detail: (type, value) => [...applicationsKeys.details(), { type, value }],
};

export { applicationsKeys, applicationdetailTypes };
