const applicationdetailTypes = {
  ID: "id",
  TESTTYPE: "perTestType",
};

const applicationsKeys = {
  all: ["applications"],
  lists: () => [...applicationsKeys.all, "list"],
  list: (filter) => [...applicationsKeys.lists(), { filter }],
  details: () => [...applicationsKeys.all, "detail"],
  fullDetails: () => [...applicationsKeys.details(), "full"],
  prefDetails: () => [...applicationsKeys.details(), "pref"],
  detail: (type, value, isFull = true) => [
    ...(isFull
      ? applicationsKeys.fullDetails()
      : applicationsKeys.prefDetails()),
    { type, value },
  ],
  ActiveLicenseId: (applicationId) => [
    ...applicationsKeys.details(),
    "ActiveLicenseId",
    applicationId,
  ],
};

export { applicationsKeys, applicationdetailTypes };
