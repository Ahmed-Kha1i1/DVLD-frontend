import SaveButton from "../../Core/ui/SaveButton";
import CloseButton from "../../Core/ui/CloseButton";
import useUpdateApplicationType from "./useUpdateApplicationType";
import PageTitle from "../../Core/ui/PageTitle";
import TextInput from "../../Core/ui/TextInput";
import { useForm } from "react-hook-form";
import { required } from "../../Core/Utils/validationRules";
/* eslint-disable react/prop-types */
function EditApplicationType({ applicationType, onCloseModal }) {
  const { id: editId, ...editedApplicationType } = applicationType;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: editedApplicationType });
  const { isUpdating, updateApplicationtype } = useUpdateApplicationType();

  function OnSubmit(applicationType) {
    updateApplicationtype({ editId, newApplicationtype: applicationType });
  }
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(OnSubmit)}>
      <PageTitle
        title={`Edit Application Type (ID: ${editId})`}
        withLine={false}
      />
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

export default EditApplicationType;
