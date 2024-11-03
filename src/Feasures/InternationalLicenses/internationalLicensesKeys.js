const internationalLicensedetailTypes = {
  ID: "id",
};

const internationalLicensesKeys = {
  all: ["internationalLicenses"],
  lists: () => [...internationalLicensesKeys.all, "list"],
  list: (filter) => [...internationalLicensesKeys.lists(), { filter }],
  details: () => [...internationalLicensesKeys.all, "detail"],
  detail: (type, value) => [
    ...internationalLicensesKeys.details(),
    { type, value },
  ],
  application: (type, value) => [
    ...internationalLicensesKeys.details(),
    "application",
    { type, value },
  ],
};

export { internationalLicensesKeys, internationalLicensedetailTypes };
