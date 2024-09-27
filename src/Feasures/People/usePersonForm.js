import { useForm } from "react-hook-form";
import { generateDefault, generateNewPerson } from "../../Utils/personUtils";
import useCountries from "../../Hooks/useCountries";
import { useState } from "react";
import useCreatePerson from "./useCreatePerson";
import useUpdatePerson from "./useUpdatePerson";
import { validatePersonUniques } from "../../Utils/apiUtils";
import { useNavigate } from "react-router-dom";

function usePersonForm(personToEdit) {
  const { editId, defaultPerosn } = generateDefault(personToEdit);
  const isEditSession = Boolean(editId);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: defaultPerosn,
  });

  const { isLoading, Countries } = useCountries();
  const [imageSrc, setImageSrc] = useState(defaultPerosn?.image);
  const { isCreating, CreatePerson } = useCreatePerson();
  const { isUpdating, UpdatePerson } = useUpdatePerson();
  const navigate = useNavigate();
  async function OnSubmit(person) {
    const isValid = await validatePersonUniques(person, personToEdit, setError);
    if (!isValid) return;

    if (isLoading) return;
    let newPerson = generateNewPerson(person, Countries.data);

    if (isEditSession) {
      newPerson.removeImage =
        newPerson.imageFile || typeof person.image !== "string";
    }

    if (isEditSession) {
      UpdatePerson(
        { editId, newPerson },
        {
          onSuccess: navigateToPerosnDetails,
        },
      );
    } else {
      CreatePerson(newPerson, {
        onSuccess: resetForm,
      });
    }
  }

  function OnError(errors) {
    console.log(errors);
  }

  function resetForm() {
    reset();
    setImageSrc(null);
  }

  function navigateToPerosnDetails() {
    navigate(`/people/${editId}/profile`);
  }

  return {
    defaultPerosn,
    register,
    imageSrc,
    setImageSrc,
    isLoading: isCreating || isUpdating,
    errors,
    handleSubmit: handleSubmit(OnSubmit, OnError),
  };
}

export default usePersonForm;
