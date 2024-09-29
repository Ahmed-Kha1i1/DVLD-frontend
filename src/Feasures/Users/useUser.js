import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../Core/Services/ApiUsers";

export default function useUser(id) {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });

  return { isLoading, error, user };
}
