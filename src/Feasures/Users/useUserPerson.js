import { useQuery } from "@tanstack/react-query";
import { userdetailTypes } from "./usersKeys";
import { getPersonByUserId } from "../../Core/Services/ApiUsers";
import { peopleKeys } from "../People/peopleKeys";
export default function useUserPerson(userId, retry = 3) {
  const {
    isLoading,
    error,
    data: person,
    refetch,
  } = useQuery({
    queryKey: peopleKeys.detail(userdetailTypes.ID, userId),
    queryFn: () => getPersonByUserId(userId),
    enabled: !!userId,
    retry: retry,
  });

  return { isLoading, error, person, refetch };
}
