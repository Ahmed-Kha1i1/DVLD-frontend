import { useMutation, useQueryClient } from "@tanstack/react-query";
import { revokeToken } from "../../Core/Services/ApiAuth";
import { useNavigate } from "react-router-dom";
import { sessoin } from "../../Constants";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: revokeToken,
    onSuccess: () => {
      queryClient.removeQueries();
      localStorage.removeItem(sessoin);
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
