import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewPerson } from "../../Services/ApiPeople";
import toast from "react-hot-toast";
import { peopleQuery, reponseStatuses } from "../../Constants";

export default function useCreatePerson() {
  const queryClient = useQueryClient();

  const { mutate: CreatePerson, isPending: isCreating } = useMutation({
    mutationFn: (person) => addNewPerson(person),
    onSuccess: (result) => {
      if (result.status === reponseStatuses.PartialSuccess) {
        toast(`Partial Success: ${result.message}`, {
          icon: "⚠️",
          style: { background: "#FCE7CA", color: "#a16207" },
        });
      } else {
        toast.success("Person successfully created!");
      }
      queryClient.invalidateQueries({
        queryKey: [peopleQuery],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isCreating, CreatePerson };
}
