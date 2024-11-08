import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DetainLicense } from "../../Core/Services/ApiDatainedLicenses";
import { detainedLicensesKeys } from "./detainedLicensesKeys";
import toast from "react-hot-toast";
import { licensesKeys } from "../License/licensesKeys";
import { useRef } from "react";

export default function useDetainLicense() {
  const queryClient = useQueryClient();
  const ref = useRef();
  function onSuccess() {
    toast.success("license successfully detained!");
    queryClient.invalidateQueries({
      queryKey: detainedLicensesKeys.lists(),
    });

    queryClient.setQueriesData(
      { queryKey: licensesKeys.details() },
      (license) =>
        license?.licenseId === ref.current
          ? { ...license, isDetained: true }
          : license,
    );
  }

  const { mutate: detain, isPending: isDetaining } = useMutation({
    mutationFn: ({ licenseId, fineFees }) => {
      ref.current = licenseId;
      return DetainLicense(licenseId, fineFees);
    },
    onSuccess: onSuccess,
  });

  return { isDetaining, detain };
}
