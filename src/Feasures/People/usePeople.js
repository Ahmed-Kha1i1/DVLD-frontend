import { useQuery } from "@tanstack/react-query";
import { getPeople } from "../../Core/Services/ApiPeople";
import { peopleKeys } from "./peopleKeys";

export default function usePeople() {
  const {
    isLoading,
    error,
    data: People,
  } = useQuery({
    queryKey: peopleKeys.lists(),
    queryFn: getPeople,
  });

  return { isLoading, error, People };
}
