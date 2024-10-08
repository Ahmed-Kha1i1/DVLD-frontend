import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser } from "../../Core/Services/ApiUsers";
import { usersKeys } from "./usersKeys";

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  function onSuccess(newUser) {
    toast.success("User successfully updated!");

    queryClient.setQueriesData({ queryKey: usersKeys.lists() }, (previous) =>
      previous.map((user) => (user.userId === newUser.userId ? newUser : user)),
    );

    queryClient.setQueriesData({ queryKey: usersKeys.details() }, (previous) =>
      previous?.userId === newUser.userId ? newUser : previous,
    );
  }
  const { mutate: UpdateUser, isPending: isUpdating } = useMutation({
    mutationFn: ({ editId, newUser }) => updateUser(editId, newUser),

    onSuccess: onSuccess,
  });

  return { isUpdating, UpdateUser };
}
