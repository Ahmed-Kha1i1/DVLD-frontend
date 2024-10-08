export const BASE_URL = "http://localhost:5263";

export const applicationStatuses = {
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

export const defaultTimeStale = 10 * 60 * 1000;
