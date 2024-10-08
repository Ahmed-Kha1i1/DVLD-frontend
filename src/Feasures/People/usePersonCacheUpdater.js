import { useQueryClient } from "@tanstack/react-query";
import { peopleKeys } from "./peopleKeys";
import { usersKeys } from "../Users/usersKeys";

function usePersonCacheUpdater() {
  const queryClient = useQueryClient();

  function update(newPerson) {
    queryClient.setQueriesData({ queryKey: peopleKeys.lists() }, (previous) =>
      previous.map((person) =>
        person.personID === newPerson.personID ? newPerson : person,
      ),
    );

    queryClient.setQueriesData(
      { queryKey: peopleKeys.details() },
      (previous) =>
        previous?.personID === newPerson.personID ? newPerson : previous,
    );

    queryClient.setQueriesData(
      { queryKey: usersKeys.fullDetails() },
      (previous) =>
        previous?.person?.personID === newPerson.personID
          ? { ...previous, person: newPerson }
          : previous,
    );
  }

  return { update };
}

export default usePersonCacheUpdater;
