export const BASE_URL = "https://dvldapi.runasp.net";

export const applicationStatuses = {
  New: "New",
  Cancelled: "Cancelled",
  Completed: "Completed",
};

export const testTypes = {
  vision: 1,
  Written: 2,
  Street: 3,
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

export const defaultTimeStale = 10 * 60 * 1000;
export const defaultPageSize = 10;
export const CurrentuserId = 1;

export const IssueReason = {
  FirstTime: 1,
  Renew: 2,
  ReplacementDamaged: 3,
  ReplacementLost: 4,
};
