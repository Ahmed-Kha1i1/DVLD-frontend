import { useMutation } from "@tanstack/react-query";
import { updatePerson } from "../../Core/Services/ApiPeople";
import toast from "react-hot-toast";
import usePersonCacheUpdater from "./usePersonCacheUpdater";

export default function useUpdatePerson() {
  const { update } = usePersonCacheUpdater();

  function onSuccess(newPerson) {
    toast.success("Person successfully updated!");
    update(newPerson);
  }
  const { mutate: UpdatePerson, isPending: isUpdating } = useMutation({
    mutationFn: ({ editId, newPerson }) => updatePerson(editId, newPerson),

    onSuccess: onSuccess,
  });

  return { isUpdating, UpdatePerson };
}
