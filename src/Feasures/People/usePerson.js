import { useQuery } from "@tanstack/react-query";
import { getPerson } from "../../Services/ApiPeople";

export default function usePerson(id) {
  const {
    isLoading,
    error,
    data: person
  } = useQuery({
    queryKey: ["person", id],
    queryFn: () => getPerson(id)
  });

  return { isLoading, error, person };
}
