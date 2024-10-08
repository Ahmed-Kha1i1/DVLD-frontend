import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../../Core/Services/ApiApplications";
import { applicationsKeys } from "./applicationsKeys";
export default function useApplications() {
  const {
    isLoading,
    error,
    data: applications,
  } = useQuery({
    queryKey: applicationsKeys.lists(),
    queryFn: getApplications,
  });

  return { isLoading, error, applications };
}
