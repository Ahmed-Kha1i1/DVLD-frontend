import { useQuery } from "@tanstack/react-query";
import { getPerson } from "../../Core/Services/ApiPeople";
import { persondetailTypes, peopleKeys } from "./peopleKeys";

export default function usePerson(
  identifier,
  type = persondetailTypes.ID,
  retry = 3,
) {
  const {
    isLoading,
    error,
    data: person,
    refetch,
  } = useQuery({
    queryKey: peopleKeys.detail(type, identifier),
    queryFn: () => getPerson(identifier, type),
    enabled: !!identifier,
    retry: retry,
  });

  return { isLoading, error, person, refetch };
}
