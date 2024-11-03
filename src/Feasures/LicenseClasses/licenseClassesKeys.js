const licenseClassDetailTypes = {
  ID: "id",
};

const licenseClassesKeys = {
  all: ["licenseClasses"],
  lists: () => [...licenseClassesKeys.all, "list"],
  list: (filter) => [...licenseClassesKeys.lists(), { filter }],
  details: () => [...licenseClassesKeys.all, "detail"],
  detail: (type, value) => [...licenseClassesKeys.details(), { type, value }],
};

export { licenseClassesKeys, licenseClassDetailTypes };
