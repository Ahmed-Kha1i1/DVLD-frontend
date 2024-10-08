import { useQuery } from "@tanstack/react-query";
import { getUser, userDataType } from "../../Core/Services/ApiUsers";
import { userdetailTypes, usersKeys } from "./usersKeys";
export default function useUser(id, accept = userDataType.full) {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: usersKeys.detail(
      userdetailTypes.ID,
      id,
      accept === userDataType.full,
    ),
    queryFn: () => getUser(id, accept),
  });

  return { isLoading, error, user };
}
