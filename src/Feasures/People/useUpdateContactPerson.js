import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateContactPerson } from "../../Services/ApiPeople";
import { peopleQuery } from "../../Constants";
import toast from "react-hot-toast";

export default function useUpdateContactPerson() {
  const queryClient = useQueryClient();

  const { mutate: UpdateContactPerson, isPending: isUpdating } = useMutation({
    mutationFn: ({ editId, newContactPerson }) =>
      updateContactPerson(editId, newContactPerson),

    onSuccess: (result) => {
      toast.success("Contact information successfully updated!");
      queryClient.invalidateQueries({
        queryKey: [peopleQuery],
      });
      queryClient.setQueryData([peopleQuery, result.personID], () => result);
    },
    onError: (error) => toast.error(error.message),
  });

  return { isUpdating, UpdateContactPerson };
}
