import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddNewInternationalLicense } from "../../Core/Services/ApiInternationalLicenses";
import { internationalLicensesKeys } from "./internationalLicensesKeys";
import toast from "react-hot-toast";

export default function useCreatePerson() {
  const queryClient = useQueryClient();

  function onSuccess(internationalLicenseId) {
    toast.success("international License successfully created!");

    queryClient.invalidateQueries({
      queryKey: internationalLicensesKeys.lists(),
    });
  }

  const { mutate: CreateInternationalLicense, isPending: isCreating } =
    useMutation({
      mutationFn: ({ licenseId, createdUser }) =>
        AddNewInternationalLicense(licenseId, createdUser),
      onSuccess: onSuccess,
    });

  return { isCreating, CreateInternationalLicense };
}
