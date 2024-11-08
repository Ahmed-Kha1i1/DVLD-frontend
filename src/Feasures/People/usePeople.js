import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPeople } from "../../Core/Services/ApiPeople";
import { peopleKeys } from "./peopleKeys";

export default function usePeople(filters) {
  const {
    isLoading,
    error,
    data: people,
  } = useQuery({
    queryKey: peopleKeys.list(filters),
    queryFn: ({ signal }) => getPeople(filters, signal),
    placeholderData: keepPreviousData,
  });

  return { isLoading, error, people };
}
