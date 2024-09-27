/* eslint-disable react/prop-types */

import Form from "../../GlobalUI/Form";
import PersonFields from "../../Feasures/People/PersonFields";
import usePersonForm from "./usePersonForm";
import SaveButton from "../../GlobalUI/SaveButton";

function PersonForm({ personToEdit = {} }) {
  const {
    defaultPerosn,
    register,
    imageSrc,
    setImageSrc,
    isLoading,
    errors,
    handleSubmit,
  } = usePersonForm(personToEdit);

  return (
    <Form onSubmit={handleSubmit}>
      <PersonFields
        errors={errors}
        register={register}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
        defaultCountry={defaultPerosn?.nationalityCountry}
      />
      <hr className="col-span-2 my-12" />
      <SaveButton disabled={isLoading} />
    </Form>
  );
}

export default PersonForm;
