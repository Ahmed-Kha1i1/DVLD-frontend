/* eslint-disable react/prop-types */
import useLicenseClasses from "../../Feasures/LicenseClasses/useLicenseClasses";
import usePerson from "../../Feasures/People/usePerson";
import { calculateAge } from "../Utils/dateUtils";
import InputError from "./InputError";
import Spinner from "./Spinner";

function LicenseClassesSelector({ register, personId, errors }) {
  const { isLoading: LicenseClassesLoading, licenseClasses } =
    useLicenseClasses();
  const { isLoading: personLoading, person } = usePerson(personId);

  function CheckMinimumAge(value) {
    const minimumAllowedAge = licenseClasses.find(
      (licenseClass) => licenseClass.id == value,
    ).minimumAllowedAge;
    return (
      calculateAge(person.dateOfBirth) >= minimumAllowedAge ||
      `Person does not meet the minimum age requirement for this license class.`
    );
  }

  if (LicenseClassesLoading || personLoading) return <Spinner />;

  return (
    <div className="flex flex-wrap gap-1">
      <label
        htmlFor="licenseClassId"
        className="basis-52 text-xl font-semibold"
      >
        License Class
      </label>
      <div>
        <select
          id="licenseClassId"
          className="input bg-gray-200"
          defaultValue={3}
          {...register("licenseClassId", {
            validate: CheckMinimumAge,
          })}
        >
          {licenseClasses.map((licenseClass) => (
            <option key={licenseClass.id} value={licenseClass.id}>
              {licenseClass.className}
            </option>
          ))}
        </select>
        <InputError className="my-1">
          {errors?.licenseClassId?.message
            ? errors?.licenseClassId?.message
            : ""}
        </InputError>
      </div>
    </div>
  );
}

export default LicenseClassesSelector;
