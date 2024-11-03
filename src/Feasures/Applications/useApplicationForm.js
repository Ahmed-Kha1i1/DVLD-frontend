import { useForm } from "react-hook-form";
import { IsLicenseExist } from "../../Core/Services/ApiLicenses";
import { GetActiveApplicationId } from "../../Core/Services/ApiBaseApplication";
import useCreateApplication from "./useCreateApplication";
import useUpdateApplication from "./useUpdateApplication";
import toast from "react-hot-toast";
import { useEffect } from "react";

function useApplicationForm(personId, applicationToEdit = {}, onSaveData) {
  const { isCreating, CreateApplication } = useCreateApplication();
  const { isUpdating, UpdateApplication } = useUpdateApplication();

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: { licenseClassId: applicationToEdit.licenseClassId },
  });
  const isEditSession = Boolean(applicationToEdit?.localApplicationId);
  useEffect(function () {
    return () => onSaveData?.(getValues());
  }, []);

  async function OnSubmit(values) {
    try {
      const licenseExists = await IsLicenseExist(
        personId,
        values.licenseClassId,
      );
      const activeApplicationId = await GetActiveApplicationId(
        personId,
        values.licenseClassId,
      );

      if (licenseExists) {
        SetLicenseError(
          "This person already has an existing license for this class.",
        );
        return;
      }

      if (
        activeApplicationId &&
        applicationToEdit?.applicationId != activeApplicationId
      ) {
        SetLicenseError(
          `This person already has an active application for this license class with id = ${activeApplicationId}.`,
        );
        return;
      }

      //If both checks pass, proceed to create the application
      if (isEditSession)
        await UpdateApplication({
          ...values,
          applicationId: applicationToEdit.localApplicationId,
        });
      else await CreateApplication({ ...values, personId });
    } catch (error) {
      toast.error("An error occurred while creating the application.");
    }
  }

  function SetLicenseError(message) {
    console.log();
    setError("licenseClassId", {
      type: "manual",
      message,
    });
  }

  return {
    onSubmit: handleSubmit(OnSubmit),
    isLoading: isCreating || isUpdating,
    register,
    errors,
  };
}

export default useApplicationForm;
