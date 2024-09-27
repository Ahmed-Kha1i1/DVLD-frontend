/* eslint-disable react/prop-types */
import { ImageUpload } from "../../Constants";
import Countries from "../../GlobalUI/Countries";
import ImageUploader from "../../GlobalUI/ImageUploader";
import { calculateDateRange } from "../../Utils/dateUtils";
import TextInput from "../../GlobalUI/TextInput";
import SelectInput from "../../GlobalUI/SelectInput";
import {
  validateBirthdateRule,
  validateGenderRule,
  validateImageRule,
  validateNameRule,
} from "../../Utils/validationRules";
import DateInput from "../../GlobalUI/DateInput";
import ContactFields from "../../GlobalUI/ContactFields";

const { minDate, maxDate } = calculateDateRange(100, 18);

function PersonFields({
  errors,
  register,
  imageSrc,
  setImageSrc,
  defaultCountry,
}) {
  return (
    <>
      <TextInput
        id="firstName"
        label="First Name"
        placeholder="First Name"
        error={errors?.firstName?.message}
        register={register}
        validation={validateNameRule("First name")}
        isRequired={true}
      />
      <TextInput
        id="secondName"
        label="Second Name"
        placeholder="Second Name"
        error={errors?.secondName?.message}
        register={register}
        validation={validateNameRule("Second name")}
        isRequired={true}
      />
      <TextInput
        id="thirdName"
        label="Third Name"
        placeholder="Third Name"
        error={errors?.thirdName?.message}
        register={register}
        validation={validateNameRule("Third name", false)}
        isRequired={true}
      />
      <TextInput
        id="lastName"
        label="Last Name"
        placeholder="Last Name"
        error={errors?.lastName?.message}
        register={register}
        validation={validateNameRule("Last name")}
        isRequired={true}
      />

      <SelectInput
        id="gender"
        label="Gender"
        error={errors?.gender?.message}
        register={register}
        validation={validateGenderRule()}
        isRequired={true}
        options={["Male", "Female"]}
      />

      <DateInput
        id="dateOfBirth"
        label="Birthdate"
        error={errors?.dateOfBirth?.message}
        register={register}
        validation={validateBirthdateRule(minDate, maxDate)}
        isRequired={true}
        minDate={minDate}
        maxDate={maxDate}
      />
      <TextInput
        id="nationalNo"
        label="National Number"
        placeholder="National Number"
        error={errors?.nationalNo?.message}
        register={register}
        validation={validateNameRule("National number")}
        isRequired={true}
      />

      <Countries
        register={register}
        error={errors?.nationalityCountry?.message}
        defaultCountry={defaultCountry}
      />

      <ContactFields errors={errors} register={register} />

      <ImageUploader
        accept={ImageUpload.allowedExtensions.join(", ")}
        error={errors?.image?.message}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
        register={() => register("image", validateImageRule())}
      />
    </>
  );
}

export default PersonFields;
