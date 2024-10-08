import { useForm } from "react-hook-form";
import {
  generateDefaultUser,
  generateNewUser,
} from "../../Core/Utils/UserUtils";
import { useEffect } from "react";
import { isUsernameUnique } from "../../Core/Services/ApiUsers";
import { useMutation } from "@tanstack/react-query";
import useUpdateUser from "./useUpdateUser";
import useCreateUser from "./useCreateUser";
import { useNavigate } from "react-router-dom";

function useUserForm(personId, userToEdit = {}, onSaveData) {
  const { editId, defaultUser } = generateDefaultUser(userToEdit);

  const isEditSession = Boolean(editId);
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: defaultUser });

  const { isCreating, CreateUser } = useCreateUser();
  const { isUpdating, UpdateUser } = useUpdateUser();
  const navigate = useNavigate();
  const { mutate: checkUsernameUniques } = useMutation({
    mutationFn: ({ username, id }) => isUsernameUnique(username, id),
  });

  useEffect(function () {
    return () => onSaveData(getValues());
  }, []);

  function onSuccess(result, userData) {
    if (!result.usernameUnique) {
      setError("username", {
        type: "manual",
        message: "Username already exists.",
      });
      return;
    }

    let newUser = generateNewUser(userData, personId);
    if (isEditSession)
      UpdateUser(
        { editId, newUser },
        {
          onSuccess: () => {
            navigate(`/users/${editId}/profile`);
          },
        },
      );
    else
      CreateUser(newUser, {
        onSuccess: () => {
          navigate("/users");
        },
      });
  }

  function OnSubmit(userData) {
    checkUsernameUniques(
      { username: userData.username.trim(), id: userToEdit?.userId },
      {
        onSuccess: (result) => onSuccess(result, userData),
      },
    );
  }

  function OnError(errors) {
    console.log(errors);
  }

  return {
    register,
    isLoading: isCreating || isUpdating,
    errors,
    handleSubmit: handleSubmit(OnSubmit, OnError),
    getValues,
  };
}

export default useUserForm;
