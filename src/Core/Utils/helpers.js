import { nativeInputValueSetter } from "../../Constants";

export function generateRandomSixDigitNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

export function setMaxLength(max, field) {
  return {
    value: max,
    message: `The length of ${field} must be ${max} characters or fewer.`,
  };
}

export function dispatchInputEvent(Input, value) {
  nativeInputValueSetter.call(Input, value);
  const event = new Event("change", { bubbles: true });
  Input.dispatchEvent(event);
}
