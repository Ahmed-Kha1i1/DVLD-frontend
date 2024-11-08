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

export function GetTestTypeName(testTypeId) {
  switch (testTypeId) {
    case 1:
      return "Vision";
    case 2:
      return "Written";
    case 3:
      return "Street";
    default:
      return "Unknown Test";
  }
}

export function determineNextTestText(passedTestCount) {
  switch (passedTestCount) {
    case 0:
      return "Vision";
    case 1:
      return "Written";
    case 2:
      return "Street";
    default:
      return "Unknown Test";
  }
}

export function determineNextTestRoute(passedTestCount) {
  switch (passedTestCount) {
    case 0:
      return "sechdule-vision";
    case 1:
      return "sechdule-written";
    case 2:
      return "sechdule-street";
    default:
      return "unknown-test";
  }
}

export function doesPassThisTest(testTypeId, passedTests) {
  if (passedTests === 0) return false;

  switch (testTypeId) {
    case 1:
      return passedTests >= 1;
    case 2:
      return passedTests >= 2;
    case 3:
      return passedTests >= 3;
    default:
      throw new Error("unKnown test type");
  }
}
