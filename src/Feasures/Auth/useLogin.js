import { useMutation } from "@tanstack/react-query";
import { getAccessTokon } from "../..//Core/Services/ApiAuth";
import { sessoin } from "../../Constants";

function useLogin() {
  function onSuccess(result) {
    if (result) localStorage.setItem(sessoin, JSON.stringify(result));
  }
  const { isPending: isLoading, mutate: Login } = useMutation({
    mutationFn: getAccessTokon,
    onSuccess: onSuccess,
  });

  return { isLoading, Login };
}

export default useLogin;
