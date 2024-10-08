import { useQuery } from "@tanstack/react-query";
import { getTestTypes } from "../../Core/Services/ApiTestTypes";
import { testTypesKeys } from "./testTypesKeys";

export default function useTestTypes() {
  const {
    isLoading,
    error,
    data: TestTypes,
  } = useQuery({
    queryKey: testTypesKeys.lists(),
    queryFn: getTestTypes,
  });

  return { isLoading, error, TestTypes };
}
