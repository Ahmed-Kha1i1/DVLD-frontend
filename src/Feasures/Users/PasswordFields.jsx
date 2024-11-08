/* eslint-disable react/prop-types */
import TextInput from "../../Core/ui/TextInput";
import {
  required,
  validateConfirmPasswordRule,
  validatePasswordRule,
} from "../../Core/Utils/validationRules";

function PasswordFields({ errors, register, getValues }) {
  return (
    <>
      <TextInput
        id="currentPassword"
        label="Current Password"
        placeholder="Current Password"
        type="password"
        error={errors?.currentPassword?.message}
        register={register}
        validation={required("Current Password")}
        isRequired={true}
        className="col-span-2"
      />
      <TextInput
        id="newPassword"
        label="New Password"
        placeholder="Password"
        type="password"
        error={errors?.newPassword?.message}
        register={register}
        validation={validatePasswordRule("New Password")}
        isRequired={true}
        className="col-span-2"
      />
      <TextInput
        id="confirmPassword"
        label="confirm New Password"
        placeholder="Confirm Password"
        type="password"
        error={errors?.confirmPassword?.message}
        register={register}
        validation={validateConfirmPasswordRule(getValues)}
        isRequired={true}
        className="col-span-2"
      />
    </>
  );
}

export default PasswordFields;
