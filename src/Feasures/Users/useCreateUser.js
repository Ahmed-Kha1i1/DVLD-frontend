import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { usersKeys } from "./usersKeys";
import { addNewUser } from "../../Core/Services/ApiUsers";

export default function useCreateUser() {
  const queryClient = useQueryClient();

  function onSuccess() {
    toast.success("User successfully created!");
    queryClient.invalidateQueries({
      queryKey: usersKeys.lists(),
    });
  }

  const { mutate: CreateUser, isPending: isCreating } = useMutation({
    mutationFn: (user) => addNewUser(user),
    onSuccess: onSuccess,
  });

  return { isCreating, CreateUser };
}
