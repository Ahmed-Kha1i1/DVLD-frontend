import { useQuery } from "@tanstack/react-query";
import { getPerson } from "../../Services/ApiPeople";
import { peopleQuery } from "../../Constants";

export default function usePerson(id) {
  const {
    isLoading,
    error,
    data: person,
  } = useQuery({
    queryKey: [peopleQuery, Number(id)],
    queryFn: () => getPerson(id),
  });

  return { isLoading, error, person };
}
