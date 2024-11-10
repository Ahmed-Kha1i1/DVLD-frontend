import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateApplication as updateApplicationApi } from "../../Core/Services/ApiApplications";
import { applicationsKeys } from "./applicationsKeys";
import { useRef } from "react";

export default function useUpdateApplication() {
  const queryClient = useQueryClient();
  const ref = useRef(null);

  function onSuccess() {
    toast.success("Application successfully updated!");

    queryClient.invalidateQueries({
      queryKey: applicationsKeys.lists(),
    });

    queryClient.invalidateQueries({
      queryKey: applicationsKeys.details(),
      predicate: (query) => {
        return (
          query.state.data?.localApplicationId == ref.current.applicationId
        );
      },
    });
  }

  const { mutate: UpdateApplication, isPending: isUpdating } = useMutation({
    mutationFn: ({ applicationId, licenseClassId }) => {
      ref.current = { applicationId, licenseClassId };
      return updateApplicationApi(applicationId, licenseClassId);
    },

    onSuccess: onSuccess,
  });

  return { isUpdating, UpdateApplication };
}
