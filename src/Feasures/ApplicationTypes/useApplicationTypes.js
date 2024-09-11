import { useQuery } from "@tanstack/react-query";
import { getApplicationTypes } from "../../Services/ApiApplicationTypes";
import { applicationTypesQuery } from "../../Constants";

export default function useApplicationTypes() {
  const {
    isLoading,
    error,
    data: ApplicationTypes
  } = useQuery({
    queryKey: [applicationTypesQuery],
    queryFn: getApplicationTypes
  });

  return { isLoading, error, ApplicationTypes };
}
