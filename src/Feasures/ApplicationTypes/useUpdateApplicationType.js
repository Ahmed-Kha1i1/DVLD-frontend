import { useMutation, useQueryClient } from "@tanstack/react-query";
import { applicationsTypesKeys } from "./applicationsTypesKeys";
import { updateApplicationType as updateApplicationTypeAPI } from "../../Core/Services/ApiApplicationTypes";
import toast from "react-hot-toast";

export default function useUpdateApplicationType() {
  const queryClient = useQueryClient();
  function onSuccess(newApplicationtype) {
    toast.success("Application type successfully updated!");

    queryClient.setQueriesData(
      { queryKey: applicationsTypesKeys.lists() },
      (previous) =>
        previous.map((applicationtype) =>
          applicationtype.id === newApplicationtype.id
            ? newApplicationtype
            : applicationtype,
        ),
    );

    queryClient.setQueriesData(
      { queryKey: applicationsTypesKeys.details() },
      (applicationtype) =>
        applicationtype?.id === newApplicationtype.id
          ? newApplicationtype
          : applicationtype,
    );
  }
  const { mutate: updateApplicationtype, isPending: isUpdating } = useMutation({
    mutationFn: ({ editId, newApplicationtype }) =>
      updateApplicationTypeAPI(editId, newApplicationtype),

    onSuccess: onSuccess,
  });

  return { isUpdating, updateApplicationtype };
}
