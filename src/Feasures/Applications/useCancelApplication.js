import { useMutation, useQueryClient } from "@tanstack/react-query";
import { applicationsKeys } from "./applicationsKeys";
import { cancelApplication as cancelApplicationApi } from "../../Core/Services/ApiApplications";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function useCancelApplication() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const ref = useRef(null);

  function onSuccess() {
    toast.success(
      `Application with ID ${ref.current} has been successfully canceled.`,
    );

    queryClient.invalidateQueries({
      queryKey: applicationsKeys.lists(),
    });

    queryClient.invalidateQueries({
      queryKey: applicationsKeys.details(),
      predicate: (query) => {
        return query.state.data?.localApplicationId == ref.current;
      },
    });

    navigate("/applications");
  }

  const { isPending: isCancelling, mutate: cancelApplication } = useMutation({
    mutationFn: (id) => {
      ref.current = id;
      return cancelApplicationApi(id);
    },
    onSuccess: onSuccess,
  });

  return { isCancelling, cancelApplication };
}
