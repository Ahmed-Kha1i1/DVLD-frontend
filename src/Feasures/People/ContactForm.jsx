/* eslint-disable react/prop-types */
import ContactFields from "../../GlobalUI/ContactFields";
import Form from "../../GlobalUI/Form";
import SaveButton from "../../GlobalUI/SaveButton";
import usePersonForm from "./usePersonForm";

function ContactForm({ personToEdit }) {
  const { register, isLoading, errors, handleSubmit } =
    usePersonForm(personToEdit);

  return (
    <Form onSubmit={handleSubmit}>
      <ContactFields errors={errors} register={register} />
      <hr className="col-span-2 my-12" />
      <SaveButton disabled={isLoading} />
    </Form>
  );
}

export default ContactForm;
