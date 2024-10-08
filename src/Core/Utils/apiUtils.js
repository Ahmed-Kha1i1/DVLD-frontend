import toast from "react-hot-toast";
import {
  isEmailUnique,
  isNationalNoUnique,
  isPhoneUnique,
} from "../Services/ApiPeople";

function handleUniqueError(setError, fieldName, isUnique, message) {
  if (!isUnique) {
    setError(fieldName, {
      type: "manual",
      message,
    });
    return true;
  }
  return false;
}

export async function validatePersonUniques(person, editId, setError) {
  try {
    const [nationalNoResult, emailResult, phoneResult] = await Promise.all([
      isNationalNoUnique(person.nationalNo.trim(), editId),
      isEmailUnique(person.email.trim(), editId),
      isPhoneUnique(person.phone.trim(), editId),
    ]);

    const hasNationalNoError = handleUniqueError(
      setError,
      "nationalNo",
      nationalNoResult.nationalNoUnique,
      "National No already exists.",
    );

    const hasEmailError = handleUniqueError(
      setError,
      "email",
      emailResult.emailUnique,
      "Email already exists.",
    );

    const hasPhoneError = handleUniqueError(
      setError,
      "phone",
      phoneResult.phoneUnique,
      "Phone number already exists.",
    );

    // Return false if any errors were found
    return !(hasNationalNoError || hasEmailError || hasPhoneError);
  } catch (error) {
    toast.error(
      "Internal Server Error: Please contact your system administrator.",
    );
    return false;
  }
}
