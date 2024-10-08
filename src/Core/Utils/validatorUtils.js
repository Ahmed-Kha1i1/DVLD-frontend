function validateWithRegex(value, regex) {
  return regex.test(value);
}

export function isNumber(value) {
  return validateWithRegex(value, /^[0-9]+$/);
}

export function validateName(value) {
  return validateWithRegex(value, /^[\w-]+$/);
}

export function validatePhone(phone) {
  return validateWithRegex(phone, /^01(0|1|2|5)\d{8}$/);
}

export function validatePassword(password) {
  return validateWithRegex(
    password,
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  );
}

export function validateEmail(email) {
  return validateWithRegex(
    email,
    /^[\w!#$%&'*+\-/=?^_`{|}~]+(\.[\w!#$%&'*+\-/=?^_`{|}~]+)*@[\w!#$%&'*+\-/=?^_`{|}~]+(\.[\w!#$%&'*+\-/=?^_`{|}~]+)+$/,
  );
}
