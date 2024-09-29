import { useQuery } from "@tanstack/react-query";
import { getTestTypes } from "../../Core/Services/ApiTestTypes";
import { testTypesQuery } from "../../Constants";

export default function useTestTypes() {
  const {
    isLoading,
    error,
    data: TestTypes,
  } = useQuery({
    queryKey: [testTypesQuery],
    queryFn: getTestTypes,
  });

  return { isLoading, error, TestTypes };
}
