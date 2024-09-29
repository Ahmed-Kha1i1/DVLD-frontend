import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getPersonById,
  getPersonByNationalNo,
} from "../../Core/Services/ApiPeople";
import { peopleQuery } from "../../Constants";

export default function usePerson(id) {
  const {
    isLoading,
    error,
    data: person,
  } = useQuery({
    queryKey: [peopleQuery, "details", Number(id)],
    queryFn: () => getPersonById(id),
  });

  return { isLoading, error, person };
}

export function usePersonByNationalNo(nationalNumber) {
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: person,
  } = useQuery({
    queryKey: [peopleQuery, "details", nationalNumber],
    queryFn: () => getPersonByNationalNo(nationalNumber),
    staleTime: 0,
    initialData: () => {
      let cashedPerson = queryClient.getQueriesData([peopleQuery, "details"]);
      cashedPerson.find((p) => p.nationalNo === nationalNumber);
      console.log("cashedPerson", cashedPerson[0][1]);
      if (cashedPerson.length > 0) {
        return cashedPerson[0][1];
      }
    },
  });

  return { isLoading, error, person };
}
