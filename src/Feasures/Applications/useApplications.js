import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../../Services/ApiApplications";

export default function useApplications() {
  const {
    isLoading,
    error,
    data: applications
  } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications
  });

  return { isLoading, error, applications };
}
