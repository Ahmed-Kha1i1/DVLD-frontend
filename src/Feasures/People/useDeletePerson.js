import { useMutation, useQueryClient } from "@tanstack/react-query";
import { peopleQuery } from "../../Constants";
import { deletePerson as deletePersonApi } from "../../Core/Services/ApiPeople";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useDeletePerson() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isPending: isDeleting,
    mutate: deletePerson,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: deletePersonApi,
    onSuccess: () => {
      toast.success("Person successfuly deleted");
      queryClient.invalidateQueries({
        queryKey: [peopleQuery],
      });
      navigate("/people");
    },
    onError: (error) => toast.error(error.message),
  });

  return { isDeleting, deletePerson, isError, isSuccess };
}
