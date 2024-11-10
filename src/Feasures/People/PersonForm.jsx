/* eslint-disable react/prop-types */

import Form from "../../Core/ui/Form";
import PersonFields from "../../Feasures/People/PersonFields";
import usePersonForm from "./usePersonForm";
import SaveButton from "../../Core/ui/SaveButton";

function PersonForm({ personToEdit = {}, updateNavigate, onAddSuccess }) {
  const {
    defaultPerosn,
    register,
    imageSrc,
    setImageSrc,
    isLoading,
    errors,
    handleSubmit,
  } = usePersonForm(personToEdit, updateNavigate, onAddSuccess);

  return (
    <Form onSubmit={handleSubmit}>
      <PersonFields
        errors={errors}
        register={register}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
        defaultCountry={defaultPerosn?.nationalityCountry}
      />
      <hr className="one-for-card-md my-12" />
      <SaveButton disabled={isLoading} />
    </Form>
  );
}

export default PersonForm;
