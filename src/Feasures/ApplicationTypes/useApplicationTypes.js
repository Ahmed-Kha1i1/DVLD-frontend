import { useQuery } from "@tanstack/react-query";
import { getApplicationTypes } from "../../Core/Services/ApiApplicationTypes";
import { applicationsTypesKeys } from "./applicationsTypesKeys";
export default function useApplicationTypes() {
  const {
    isLoading,
    error,
    data: ApplicationTypes,
  } = useQuery({
    queryKey: applicationsTypesKeys.lists(),
    queryFn: getApplicationTypes,
  });

  return { isLoading, error, ApplicationTypes };
}
