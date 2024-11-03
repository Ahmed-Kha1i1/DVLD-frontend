import { useQuery } from "@tanstack/react-query";
import { testTypedetailTypes, testTypesKeys } from "./testTypesKeys";
import { getTestType } from "../../Core/Services/ApiTestTypes";
export default function useTestType(id, enabled = true) {
  const {
    isLoading,
    error,
    data: testType,
  } = useQuery({
    queryKey: testTypesKeys.detail(testTypedetailTypes.ID, id),
    queryFn: () => getTestType(id),
    enabled: !!id && enabled,
  });

  return { isLoading, error, testType };
}
