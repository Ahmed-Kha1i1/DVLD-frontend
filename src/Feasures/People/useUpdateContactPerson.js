import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import usePersonCacheUpdater from "./usePersonCacheUpdater";
import { updateContactPerson } from "../../Core/Services/ApiPeople";

export default function useUpdateContactPerson() {
  const { update } = usePersonCacheUpdater();

  function onSuccess(newPerson) {
    toast.success("Contact information successfully updated!");
    update(newPerson);
  }

  const { mutate: UpdateContactPerson, isPending: isUpdating } = useMutation({
    mutationFn: ({ editId, newContactPerson }) =>
      updateContactPerson(editId, newContactPerson),

    onSuccess: onSuccess,
  });

  return { isUpdating, UpdateContactPerson };
}
