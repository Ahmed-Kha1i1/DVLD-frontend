import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getApplications } from "../../Core/Services/ApiApplications";
import { applicationsKeys } from "./applicationsKeys";
export default function useApplications(filters) {
  const {
    isLoading,
    error,
    data: applications,
  } = useQuery({
    queryKey: applicationsKeys.list(filters),
    queryFn: ({ signal }) => getApplications(filters, signal),
    placeholderData: keepPreviousData,
  });

  return { isLoading, error, applications };
}
