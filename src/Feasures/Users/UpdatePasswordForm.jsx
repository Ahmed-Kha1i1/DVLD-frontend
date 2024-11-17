/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Form from "../../Core/ui/Form";
import PasswordFields from "./PasswordFields";
import useUpdatePassword from "../Users/useUpdatePassword";
import SaveButton from "../../Core/ui/SaveButton";
import { isPasswordValid } from "../../Core/Services/ApiUsers";
import toast from "react-hot-toast";

function UpdatePasswordForm({ userId }) {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const { isUpdating, UpdatePassword } = useUpdatePassword();
  async function OnSubmit(values) {
    try {
      const isValid = await isPasswordValid(userId, values.currentPassword);
      if (isValid) {
        UpdatePassword({
          userId,
          newPassword: values.newPassword,
          oldPassword: values.currentPassword,
        });
        reset();
      } else {
        setError("currentPassword", {
          type: "manual",
          message:
            "The old password you provided is incorrect. Please try again.",
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  function OnError(errors) {}

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
