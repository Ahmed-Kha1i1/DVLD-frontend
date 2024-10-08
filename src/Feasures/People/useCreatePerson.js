import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewPerson } from "../../Core/Services/ApiPeople";
import toast from "react-hot-toast";
import { reponseStatuses } from "../../Constants";
import { peopleKeys } from "./peopleKeys";

export default function useCreatePerson() {
  const queryClient = useQueryClient();

  function onSuccess(result) {
    if (result.status === reponseStatuses.PartialSuccess) {
      toast(`Partial Success: ${result.message}`, {
        icon: "⚠️",
        style: { background: "#FCE7CA", color: "#a16207" },
      });
    } else {
      toast.success("Person successfully created!");
    }
    queryClient.invalidateQueries({
      queryKey: peopleKeys.lists(),
    });
  }

  const { mutate: CreatePerson, isPending: isCreating } = useMutation({
    mutationFn: (person) => addNewPerson(person),
    onSuccess: onSuccess,
  });

  return { isCreating, CreatePerson };
}
