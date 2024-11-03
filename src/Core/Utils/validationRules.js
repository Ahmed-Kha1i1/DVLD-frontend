import { validateImageFile } from "./FileUtils";
import { setMaxLength } from "./helpers";
import {
  isNumber,
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from "./validatorUtils";

export function validateIdRule(field) {
  return {
    required: `${field} is required`,
    validate: (value) => isNumber(value) || `${field} must be number`,
    min: {
      value: 1,
      message: `${field} is inValid. ${field} must be greater than 0.`,
    },
  };
}

export function required(field) {
  const rule = {
    required: `${field} is required`,
  };
  return rule;
}
export function validateNameRule(field, required = true) {
  const rule = {
    maxLength: setMaxLength(20, `${field}`),
    validate: (value) =>
      !value ||
      validateName(value.trim()) ||
      `${field} can only contain letters, numbers, and hyphens`,
  };

  if (required) rule.required = `${field} is required`;
  return rule;
}

export function validatePasswordRule() {
  return {
    required: "Password is required",
    maxLength: setMaxLength(20, "Password"),
    validate: (value) =>
      validatePassword(value.trim()) ||
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
  };
}

export function validateConfirmPasswordRule(getValues) {
  return {
    required: "Confirm Password is required",

    validate: (value) =>
      value.trim() === getValues()?.password?.trim() ||
      "Passwords do not match",
  };
}

export function validateGenderRule() {
  return {
    required: "Gender is required",
    validate: (value) =>
      value === "Male" || value === "Female" || "Invalid gender selection",
  };
}

export function validateBirthdateRule(minDate, maxDate) {
  return {
    required: "Date of birth is required",
    min: {
      value: minDate,
      message: `Date of birth cannot be earlier than ${minDate}`,
    },
    max: {
      value: maxDate,
      message: `Date of birth cannot be later than ${maxDate}.`,
    },
  };
}

export function validateAddressRule() {
  return {
    required: "Address is required",
    maxLength: setMaxLength(500, "address"),
  };
}

export function validatePhoneRule() {
  return {
    required: "Phone is required",
    validate: (value) => validatePhone(value.trim()) || "Phone is not valid",
  };
}

export function validateEmailRule() {
  return {
    required: "Email is required",
    validate: (value) => validateEmail(value.trim()) || "Email is not valid",
  };
}

export function validateImageRule() {
  return {
    validate: (value) =>
      typeof value === "object" && value.length > 0
        ? validateImageFile(value[0])
        : true,
  };
}

export function validateCountryRule(CountriesData) {
  return {
    required: "Country is required",
    validate: (value) =>
      CountriesData.some(
        (country) => country.countryName.toLowerCase() === value.toLowerCase(),
      ) || "Invalid country selection",
  };
}
