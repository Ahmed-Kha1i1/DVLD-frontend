import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersKeys } from "./usersKeys";
import { deleteUser as deleteUserApi } from "../../Core/Services/ApiUsers";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "../Auth/useCurrentUser";
import { sessoin } from "../../Constants";
export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();

  function onSuccess(userId) {
    toast.success(`User  with ID ${userId} has been successfully deleted.`);
    queryClient.setQueriesData({ queryKey: usersKeys.lists() }, (previous) => {
      return previous ? previous.filter((user) => user.userId !== userId) : [];
    });

    queryClient.removeQueries({
      queryKey: usersKeys.details(),
      predicate: (query) => {
        return query.state.data.UserId == userId;
      },
    });
    if (currentUser && currentUser?.userId == userId) {
      localStorage.removeItem(sessoin);
      window.location.href = "/login";
    }
    navigate("/users");
  }

  const { isPending: isDeleting, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: onSuccess,
  });

  return { isDeleting, deleteUser };
}
