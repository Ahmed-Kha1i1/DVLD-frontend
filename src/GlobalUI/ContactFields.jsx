/* eslint-disable react/prop-types */
import {
  validateAddressRule,
  validateEmailRule,
  validatePhoneRule,
} from "../Utils/validationRules";
import TextInput from "./TextInput";

function ContactFields({ errors, register }) {
  return (
    <>
      <TextInput
        id="address"
        label="Address"
        placeholder="Address"
        error={errors?.address?.message}
        register={register}
        validation={validateAddressRule()}
        isRequired={true}
        className="col-span-2"
      />

      <TextInput
        id="phone"
        label="Phone"
        placeholder="Phone"
        error={errors?.phone?.message}
        register={register}
        validation={validatePhoneRule()}
        isRequired={true}
      />
      <TextInput
        id="email"
        label="Email"
        placeholder="Email"
        error={errors?.email?.message}
        register={register}
        validation={validateEmailRule()}
        isRequired={true}
      />
    </>
  );
}

export default ContactFields;
