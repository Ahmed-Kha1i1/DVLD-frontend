import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePerson } from "../../Services/ApiPeople";
import toast from "react-hot-toast";
import { peopleQuery } from "../../Constants";

export default function useUpdatePerson() {
  const queryClient = useQueryClient();

  const { mutate: UpdatePerson, isPending: isUpdating } = useMutation({
    mutationFn: ({ editId, newPerson }) => updatePerson(editId, newPerson),

    onSuccess: (result) => {
      toast.success("Person successfully updated!");
      queryClient.invalidateQueries({
        queryKey: [peopleQuery],
      });
      queryClient.setQueryData([peopleQuery, result.personID], () => result);
    },
    onError: (error) => toast.error(error.message),
  });

  return { isUpdating, UpdatePerson };
}
