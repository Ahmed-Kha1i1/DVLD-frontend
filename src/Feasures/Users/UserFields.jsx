/* eslint-disable react/prop-types */

import TextInput from "../../Core/ui/TextInput";
import { validateNameRule } from "../../Core/Utils/validationRules";
import PasswordFields from "./PasswordFields";

function UserFields({ errors, register, getValues, isEditSession }) {
  return (
    <>
      <TextInput
        id="username"
        label="Username"
        placeholder="Username"
        error={errors?.username?.message}
        register={register}
        validation={validateNameRule("Username")}
        isRequired={true}
        className="col-span-2"
      />
      {!isEditSession && (
        <PasswordFields
          errors={errors}
          register={register}
          getValues={getValues}
        />
      )}
      <div className="text-lg text-gray-700">
        <input
          id="isActive"
          type="checkbox"
          {...register("isActive")}
          value={true}
          className="mr-3 text-black"
        />
        <label htmlFor="isActive" className="font-semibold">
          IsActive
        </label>
      </div>
    </>
  );
}

export default UserFields;
