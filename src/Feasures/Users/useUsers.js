import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Core/Services/ApiUsers";
import { usersKeys } from "./usersKeys";

export default function useUsers(filters) {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery({
    queryKey: usersKeys.list(filters),
    queryFn: ({ signal }) => getUsers(filters, signal),
    placeholderData: keepPreviousData,
  });

  return { isLoading, error, users };
}
