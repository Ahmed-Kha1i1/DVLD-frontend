import { useQuery } from "@tanstack/react-query";
import { getBaseApplication } from "../../Core/Services/ApiBaseApplication";
import {
  baseApplicationsKeys,
  baseApplicationdetailTypes,
} from "./baseApplicationsKeys";

function useBaseApplication(id, retry = 3) {
  const {
    isLoading,
    error,
    data: baseApplication,
  } = useQuery({
    queryKey: baseApplicationsKeys.detail(baseApplicationdetailTypes.ID, id),
    queryFn: () => getBaseApplication(id),
    enabled: !!id,
    retry: retry,
  });

  return { isLoading, error, baseApplication };
}

export default useBaseApplication;
