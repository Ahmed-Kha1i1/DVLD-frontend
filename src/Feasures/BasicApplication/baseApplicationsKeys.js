const baseApplicationdetailTypes = {
  ID: "id",
};

const baseApplicationsKeys = {
  all: ["baseApplications"],
  lists: () => [...baseApplicationsKeys.all, "list"],
  list: (filter) => [...baseApplicationsKeys.lists(), { filter }],
  details: () => [...baseApplicationsKeys.all, "detail"],
  detail: (type, value) => [...baseApplicationsKeys.details(), { type, value }],
};

export { baseApplicationsKeys, baseApplicationdetailTypes };
