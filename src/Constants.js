export const BASE_URL = "http://localhost:5263";

export const Statuses = {
  New: "New",
  Cancelled: "Cancelled",
  Completed: "Completed",
};

export const reponseStatuses = {
  Success: "success",
  Fail: "fail",
  Error: "error",
  PartialSuccess: "partial_success",
};

export const ImageUpload = {
  allowedExtensions: [".jpg", ".jpeg", ".png", ".gif", ".bmp"],
  maxSizeInMegaBytes: 1,
};

export const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  "value",
).set;

export const applicationsQuery = "applications";
export const applicationTypesQuery = "applicationTypes";
export const detainedLicensesQuery = "detainedLicenses";
export const internationalLicensesQuery = "internationalApplications";
export const testTypesQuery = "pestTypes";
export const peopleQuery = "people";
export const usersQuery = "users";
export const driverInternationalLicensesQuery = "driverInternationalLicenses";
export const driverLicensesQuery = "driverLicenses";
export const driversQuery = "drivers";
export const CountriesQuery = "countries";
