import { useQuery } from "@tanstack/react-query";
import {
  applicationsTypesKeys,
  applicationsTypedetailTypes,
} from "./applicationsTypesKeys";
import { getApplicationType } from "../../Core/Services/ApiApplicationTypes";
export default function useApplicationType(id, enabled = true) {
  const {
    isLoading,
    error,
    data: applicationType,
  } = useQuery({
    queryKey: applicationsTypesKeys.detail(applicationsTypedetailTypes.ID, id),
    queryFn: () => getApplicationType(id),
    enabled: !!id && enabled,
  });

  return { isLoading, error, applicationType };
}
