import { useMutation, useQueryClient } from "@tanstack/react-query";
import { applicationsKeys } from "./applicationsKeys";
import { deleteApplication as deleteApplicationApi } from "../../Core/Services/ApiApplications";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function useDeleteApplication() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const ref = useRef(null);

  function onSuccess() {
    toast.success(
      `Application with ID ${ref.current} has been successfully deleted.`,
    );

    queryClient.setQueriesData(
      { queryKey: applicationsKeys.lists() },
      (previous) => {
        return previous
          ? previous.filter(
              (Application) => Application.localApplicationId !== ref.current,
            )
          : [];
      },
    );

    queryClient.removeQueries({
      queryKey: applicationsKeys.details(),
      predicate: (query) => {
        return query.state.data?.localApplicationId === ref.current;
      },
    });
    navigate("/applications");
  }

  const { isPending: isDeleting, mutate: deleteApplication } = useMutation({
    mutationFn: (id) => {
      ref.current = id;
      return deleteApplicationApi(id);
    },
    onSuccess: onSuccess,
  });

  return { isDeleting, deleteApplication };
}
