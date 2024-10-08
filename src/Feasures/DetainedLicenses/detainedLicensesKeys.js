const detainedLicensedetailTypes = {
  ID: "id",
};

const detainedLicensesKeys = {
  all: ["detainedLicenses"],
  lists: () => [...detainedLicensesKeys.all, "list"],
  list: (filter) => [...detainedLicensesKeys.lists(), { filter }],
  details: () => [...detainedLicensesKeys.all, "detail"],
  detail: (type, value) => [...detainedLicensesKeys.details(), { type, value }],
};

export { detainedLicensesKeys, detainedLicensedetailTypes };
