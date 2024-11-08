import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ReplaceLicense } from "../../Core/Services/ApiLicenses";
import { licensesKeys } from "./licensesKeys";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function useReplaceLicense() {
  const queryClient = useQueryClient();
  const ref = useRef();

  function onSuccess() {
    toast.success("License successfully replaced!");

    queryClient.invalidateQueries({
      queryKey: licensesKeys.lists(),
    });
  }

  queryClient.setQueriesData({ queryKey: licensesKeys.details() }, (license) =>
    license?.licenseId === ref.current
      ? { ...license, isActive: false }
      : license,
  );

  const { mutate: Replace, isPending: isCreating } = useMutation({
    mutationFn: ({ OldLicenseId, IssueReason }) => {
      ref.current = OldLicenseId;
      return ReplaceLicense(OldLicenseId, IssueReason);
    },
    onSuccess: onSuccess,
  });

  return { isCreating, Replace };
}
