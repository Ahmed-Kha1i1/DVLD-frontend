/* eslint-disable react/prop-types */
import Form from "../../Core/ui/Form";
import SaveButton from "../../Core/ui/SaveButton";
import UserFields from "./UserFields";
import useUserForm from "./useUserForm";

function UserForm({ formDataRef, personId, userToEdit = {} }) {
  const { register, isLoading, errors, handleSubmit, getValues } = useUserForm(
    personId,
    formDataRef.current?.username ? formDataRef.current : userToEdit,
    onSaveData,
  );

  function onSaveData(data) {
    formDataRef.current = data;
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <UserFields
          errors={errors}
          register={register}
          getValues={getValues}
          isEditSession={Boolean(userToEdit?.userId)}
        />
        <hr className="col-span-2 my-12" />
        <SaveButton disabled={isLoading} />
      </Form>
    </div>
  );
}

export default UserForm;
