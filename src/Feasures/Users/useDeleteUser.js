import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersQuery } from "../../Constants";
import { deleteUser as deleteUserApi } from "../../Core/Services/ApiUsers";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isPending: isDeleting,
    mutate: deleteUser,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success("User successfuly deleted");
      queryClient.invalidateQueries({
        queryKey: [usersQuery],
      });
      navigate("/users");
    },
    onError: (error) => toast.error(error.message),
  });

  return { isDeleting, deleteUser, isError, isSuccess };
}
