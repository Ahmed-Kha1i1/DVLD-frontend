/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Form from "../../Core/ui/Form";
import PasswordFields from "./PasswordFields";
import useUpdatePassword from "../Users/useUpdatePassword";
import SaveButton from "../../Core/ui/SaveButton";

function UpdatePasswordForm({ userId }) {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const { isUpdating, UpdatePassword } = useUpdatePassword();
  function OnSubmit(values) {
    console.log("values", values);
    UpdatePassword({ userId, newPassword: values.password });
    reset();
  }
  function OnError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(OnSubmit, OnError)}>
      <PasswordFields
        errors={errors}
        register={register}
        getValues={getValues}
      />
      <SaveButton disabled={isUpdating} />
    </Form>
  );
}

export default UpdatePasswordForm;
