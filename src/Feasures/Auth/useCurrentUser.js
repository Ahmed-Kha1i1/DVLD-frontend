import { useQuery } from "@tanstack/react-query";
import { sessoin } from "../../Constants";
import { usersKeys } from "../Users/usersKeys";
import { getUser } from "../../Core/Services/ApiUsers";

function useCurrentUser() {
  const curruentSessoinjson = localStorage.getItem(sessoin);
  const curruentSessoin = JSON.parse(curruentSessoinjson);

  const {
    isLoading,
    error,
    data: currentUser,
  } = useQuery({
    queryKey: usersKeys.currentUser(),
    queryFn: () => getUser(curruentSessoin?.userId),
    enabled: !!curruentSessoin?.userId,
  });

  return { isLoading, error, currentUser };
}

export default useCurrentUser;
