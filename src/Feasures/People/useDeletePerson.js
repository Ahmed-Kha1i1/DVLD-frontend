import { useMutation, useQueryClient } from "@tanstack/react-query";
import { peopleKeys } from "./peopleKeys";
import { deletePerson as deletePersonApi } from "../../Core/Services/ApiPeople";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useDeletePerson() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  function onSuccess(personID) {
    toast.success(`Person  with ID ${personID} has been successfully deleted.`);

    queryClient.setQueriesData({ queryKey: peopleKeys.lists() }, (previous) => {
      return previous
        ? previous.filter((person) => person.personID !== personID)
        : [];
    });

    queryClient.removeQueries({
      queryKey: peopleKeys.details(),
      predicate: (query) => {
        return query.state.data.personID === personID;
      },
    });
    navigate("/people");
  }

  const { isPending: isDeleting, mutate: deletePerson } = useMutation({
    mutationFn: deletePersonApi,
    onSuccess: onSuccess,
  });

  return { isDeleting, deletePerson };
}
