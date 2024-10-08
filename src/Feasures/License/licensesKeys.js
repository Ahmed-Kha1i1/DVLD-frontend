const licensedetailTypes = {
  ID: "id",
};

const licensesKeys = {
  all: ["licenses"],
  lists: () => [...licensesKeys.all, "list"],
  list: (filter) => [...licensesKeys.lists(), { filter }],
  details: () => [...licensesKeys.all, "detail"],
  detail: (type, value) => [...licensesKeys.details(), { type, value }],
};

export { licensesKeys, licensedetailTypes };
