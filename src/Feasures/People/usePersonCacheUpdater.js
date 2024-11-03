import { useQueryClient } from "@tanstack/react-query";
import { peopleKeys } from "./peopleKeys";
import { usersKeys } from "../Users/usersKeys";
import { driversKeys } from "../Drivers/driversKeys";

function usePersonCacheUpdater() {
  const queryClient = useQueryClient();

  function update(newPerson) {
    queryClient.invalidateQueries({ queryKey: peopleKeys.lists() });

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

    queryClient.setQueriesData(
      { queryKey: driversKeys.details() },
      (previous) =>
        previous?.person?.personID === newPerson.personID
          ? { ...previous, person: newPerson }
          : previous,
    );
  }

  return { update };
}

export default usePersonCacheUpdater;
