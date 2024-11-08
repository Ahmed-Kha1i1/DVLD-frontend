import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import toast from "react-hot-toast";
import { detainedLicensesKeys } from "./detainedLicensesKeys";
import { licensesKeys } from "../License/licensesKeys";
import { ReleaseLicense } from "../../Core/Services/ApiDatainedLicenses";

export default function useReleaseLicence() {
  const queryClient = useQueryClient();
  const ref = useRef();
  function onSuccess() {
    toast.success("license successfully released!");

    queryClient.invalidateQueries({
      queryKey: detainedLicensesKeys.lists(),
    });

    queryClient.setQueriesData(
      { queryKey: licensesKeys.details() },
      (license) =>
        license?.licenseId === ref.current
          ? { ...license, isDetained: false }
          : license,
    );
  }

  const { mutate: Release, isPending: isReleasing } = useMutation({
    mutationFn: (licenseId) => {
      ref.current = licenseId;
      return ReleaseLicense(licenseId);
    },
    onSuccess: onSuccess,
  });

  return { isReleasing, Release };
}
