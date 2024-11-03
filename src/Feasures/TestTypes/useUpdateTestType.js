import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { testTypesKeys } from "./testTypesKeys";
import { updateTestType as updateTestTypeAPI } from "../../Core/Services/ApiTestTypes";
export default function useUpdateTestType() {
  const queryClient = useQueryClient();
  function onSuccess(newtestType) {
    toast.success("Test type successfully updated!");

    queryClient.setQueriesData(
      { queryKey: testTypesKeys.lists() },
      (previous) =>
        previous.map((testType) =>
          testType.id === newtestType.id ? newtestType : testType,
        ),
    );

    queryClient.setQueriesData(
      { queryKey: testTypesKeys.details() },
      (testType) => (testType?.id === newtestType.id ? newtestType : testType),
    );
  }
  const { mutate: updateTestType, isPending: isUpdating } = useMutation({
    mutationFn: ({ editId, newTestType }) =>
      updateTestTypeAPI(editId, newTestType),

    onSuccess: onSuccess,
  });

  return { isUpdating, updateTestType };
}
