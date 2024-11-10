import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IssueLicense as IssueLicenseApi } from "../../Core/Services/ApiApplications";
import { useNavigate } from "react-router-dom";
import { applicationsKeys } from "./applicationsKeys";
import { driversKeys } from "../Drivers/driversKeys";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function useIssueLicense() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const ref = useRef(null);

  function onSuccess(licenseId) {
    toast.success(
      `Application with ID ${ref.current} has been successfully issued with license Id ${licenseId}.`,
    );

    queryClient.invalidateQueries({
      queryKey: applicationsKeys.lists(),
    });

    queryClient.invalidateQueries({
      queryKey: driversKeys.lists(),
    });

    queryClient.invalidateQueries({
      queryKey: applicationsKeys.details(),
      predicate: (query) => {
        return query.state.data?.localApplicationId == ref.current;
      },
    });

    queryClient.invalidateQueries({
      queryKey: applicationsKeys.ActiveLicenseId(ref.current),
    });
    navigate("/applications");
  }

  const { isPending: IsIssueing, mutate: IssueLicense } = useMutation({
    mutationFn: ({ localApplicationId, notes }) => {
      ref.current = localApplicationId;
      return IssueLicenseApi(localApplicationId, notes);
    },
    onSuccess: onSuccess,
  });

  return { IsIssueing, IssueLicense };
}
