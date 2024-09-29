import toast from "react-hot-toast";
import {
  isEmailUnique,
  isNationalNoUnique,
  isPhoneUnique,
} from "../Services/ApiPeople";

export async function validatePersonUniques(person, personToEdit, setError) {
  let hasError = false;

  try {
    const [nationalNoResult, emailResult, phoneResult] = await Promise.all([
      person.nationalNo !== personToEdit.nationalNo
        ? isNationalNoUnique(person.nationalNo.trim())
        : undefined,
      person.email !== personToEdit.email
        ? isEmailUnique(person.email.trim())
        : undefined,
      person.phone !== personToEdit.phone
        ? isPhoneUnique(person.phone.trim())
        : undefined,
    ]);

    if (nationalNoResult && nationalNoResult.nationalNoUnique === false) {
      setError("nationalNo", {
        type: "manual",
        message: "National No already exists.",
      });
      hasError = true;
    }

    if (emailResult && emailResult.emailUnique === false) {
      setError("email", {
        type: "manual",
        message: "Email already exists.",
      });
      hasError = true;
    }

    if (phoneResult && phoneResult.phoneUnique === false) {
      setError("phone", {
        type: "manual",
        message: "Phone number already exists.",
      });
      hasError = true;
    }
  } catch (error) {
    toast.error(
      "Internal Server Error: Please contact with your system administrator.",
    );
    return false;
  }
  return !hasError; // Return true if no errors, false if errors found
}

export async function validateContactsUniques() {}
