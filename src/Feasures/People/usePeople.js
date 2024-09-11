import { useQuery } from "@tanstack/react-query";
import { getPeople } from "../../Services/ApiPeople";
import { peopleQuery } from "../../Constants";

export default function usePeople() {
  const {
    isLoading,
    error,
    data: People
  } = useQuery({
    queryKey: [peopleQuery],
    queryFn: getPeople
  });

  return { isLoading, error, People };
}
