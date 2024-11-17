/* eslint-disable react/prop-types */
import CloseButton from "../../Core/ui/CloseButton";
import SaveButton from "../../Core/ui/SaveButton";
import useUpdateTestType from "./useUpdateTestType";
import TextInput from "../../Core/ui/TextInput";
import { required } from "../../Core/Utils/validationRules";
import { useForm } from "react-hook-form";
import PageTitle from "../../Core/ui/PageTitle";
function EditTestType({ testType, onCloseModal }) {
  const { id: editId, ...editedTestType } = testType;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: editedTestType });
  const { isUpdating, updateTestType } = useUpdateTestType();

  function OnSubmit(testType) {
    updateTestType({ editId, newTestType: testType });
  }
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(OnSubmit)}>
      <PageTitle title={`Edit Test Type (ID: ${editId})`} withLine={false} />
      <TextInput
        id="title"
        label="Title"
        placeholder="Title"
        error={errors?.title?.message}
        register={register}
        validation={required("Title")}
        isRequired={true}
      />

      <TextInput
        id="description"
        label="Description"
        placeholder="Description"
        error={errors?.description?.message}
        register={register}
        validation={required("Description")}
        isRequired={true}
        isTextArea={true}
      />
      <TextInput
        id="fees"
        label="Fees"
        placeholder="Fees"
        error={errors?.fees?.message}
        register={register}
        validation={required("Fees")}
        isRequired={true}
      />
      <div className="flex justify-end gap-4">
        <CloseButton onClose={onCloseModal} />
        <SaveButton disabled={isUpdating} />
      </div>
    </form>
  );
}

export default EditTestType;
