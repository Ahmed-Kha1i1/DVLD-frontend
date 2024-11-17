import { useForm } from "react-hook-form";
import {
  generateDefault,
  generateNewPerson,
} from "../../Core/utils/personUtils";
import useCountries from "../../Core/Hooks/useCountries";
import { useState } from "react";
import useCreatePerson from "./useCreatePerson";
import useUpdatePerson from "./useUpdatePerson";
import { validatePersonUniques } from "../../Core/Utils/apiUtils";
import { useNavigate } from "react-router-dom";

function usePersonForm(personToEdit, updateNavigate, onAddSuccess) {
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
    const isValid = await validatePersonUniques(person, editId, setError);
    if (!isValid) return;

    if (isLoading) return;

    let newPerson = generateNewPerson(person, Countries);

    if (isEditSession) {
      newPerson.removeImage =
        newPerson.imageFile || typeof person.image !== "string";
    }

    if (isEditSession) {
      UpdatePerson(
        { editId, newPerson },
        {
          onSuccess: () => {
            if (updateNavigate) navigate(updateNavigate);
          },
        },
      );
    } else {
      CreatePerson(newPerson, {
        onSuccess: (result) => {
          resetForm();
          onAddSuccess?.(result.id);
        },
      });
    }
  }

  function OnError(errors) {}

  function resetForm() {
    reset();
    setImageSrc(null);
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
