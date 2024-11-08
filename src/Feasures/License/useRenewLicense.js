import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RenewLicense } from "../../Core/Services/ApiLicenses";
import { licensesKeys } from "./licensesKeys";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function useRenewLicense() {
  const queryClient = useQueryClient();
  const ref = useRef();

  function onSuccess() {
    toast.success("License successfully renewed!");

    queryClient.invalidateQueries({
      queryKey: licensesKeys.lists(),
    });

    queryClient.setQueriesData(
      { queryKey: licensesKeys.details() },
      (license) =>
        license?.licenseId === ref.current
          ? { ...license, isActive: false }
          : license,
    );
  }

  const { mutate: Renew, isPending: isCreating } = useMutation({
    mutationFn: ({ OldLicenseId, notes }) => {
      ref.current = OldLicenseId;
      return RenewLicense(OldLicenseId, notes);
    },
    onSuccess: onSuccess,
  });

  return { isCreating, Renew };
}
