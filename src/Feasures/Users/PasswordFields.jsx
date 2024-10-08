/* eslint-disable react/prop-types */
import TextInput from "../../Core/ui/TextInput";
import {
  validateConfirmPasswordRule,
  validatePasswordRule,
} from "../../Core/Utils/validationRules";

function PasswordFields({ errors, register, getValues }) {
  return (
    <>
      <TextInput
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
        error={errors?.password?.message}
        register={register}
        validation={validatePasswordRule()}
        isRequired={true}
        className="col-span-2"
      />
      <TextInput
        id="confirmPassword"
        label="confirm Password"
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
