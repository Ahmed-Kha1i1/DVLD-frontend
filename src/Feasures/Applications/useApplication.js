import { useQuery } from "@tanstack/react-query";
import {
  applicationDataType,
  getApplication,
} from "../../Core/Services/ApiApplications";
import { applicationsKeys, applicationdetailTypes } from "./applicationsKeys";
export default function useApplication(id, accept = applicationDataType.full) {
  const {
    isLoading,
    error,
    data: application,
  } = useQuery({
    queryKey: applicationsKeys.detail(
      applicationdetailTypes.ID,
      id,
      accept === applicationDataType.full,
    ),
    queryFn: () => getApplication(id, accept),
  });

  return { isLoading, error, application };
}
