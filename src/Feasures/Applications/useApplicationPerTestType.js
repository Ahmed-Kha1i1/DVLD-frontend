import { useQuery } from "@tanstack/react-query";
import { getApplicationPerTestType } from "../../Core/Services/ApiApplications";
import { applicationdetailTypes, applicationsKeys } from "./applicationsKeys";

function useApplicationPerTestType(localApplciationId, testTypeId) {
  const {
    isLoading,
    error,
    data: application,
  } = useQuery({
    queryKey: applicationsKeys.detail(
      applicationdetailTypes.TESTTYPE,
      {
        localApplciationId,
        testTypeId,
      },
      false,
    ),

    queryFn: () => getApplicationPerTestType(localApplciationId, testTypeId),
  });

  return { isLoading, error, application };
}

export default useApplicationPerTestType;
