import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Core/Services/ApiUsers";
import { usersKeys } from "./usersKeys";

export default function useUsers() {
  const {
    isLoading,
    error,
    data: Users,
  } = useQuery({
    queryKey: usersKeys.lists(),
    queryFn: getUsers,
  });

  return { isLoading, error, Users };
}
