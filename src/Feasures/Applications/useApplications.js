import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../../Services/ApiApplications";
import { applicationsQuery } from "../../Constants";

export default function useApplications() {
  const {
    isLoading,
    error,
    data: applications
  } = useQuery({
    queryKey: [applicationsQuery],
    queryFn: getApplications
  });

  return { isLoading, error, applications };
}
