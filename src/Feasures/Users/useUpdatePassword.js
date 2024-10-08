import { useMutation } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../../Core/Services/ApiUsers";
import toast from "react-hot-toast";

function useUpdatePassword() {
  const { mutate: UpdatePassword, isPending: isUpdating } = useMutation({
    mutationFn: ({ userId, newPassword }) =>
      updatePasswordApi(userId, newPassword),
    onSuccess: () => toast.success(`Password has been successfully updated.`),
  });

  return { isUpdating, UpdatePassword };
}

export default useUpdatePassword;
