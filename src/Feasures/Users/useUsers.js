import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Core/Services/ApiUsers";
import { usersQuery } from "../../Constants";

export default function useUsers() {
  const {
    isLoading,
    error,
    data: Users,
  } = useQuery({
    queryKey: [usersQuery],
    queryFn: getUsers,
  });

  return { isLoading, error, Users };
}
