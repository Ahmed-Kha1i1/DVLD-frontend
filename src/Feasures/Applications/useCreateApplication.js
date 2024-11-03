import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { applicationsKeys } from "./applicationsKeys";
import { addNewApplication } from "../../Core/Services/ApiApplications";
import { useNavigate } from "react-router-dom";

export default function useCreateApplication() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  function onSuccess() {
    toast.success("Local application successfully created!");
    queryClient.invalidateQueries({
      queryKey: applicationsKeys.lists(),
    });
    navigate(`/applications`);
  }

  const { mutate: CreateApplication, isPending: isCreating } = useMutation({
    mutationFn: ({ personId, licenseClassId }) =>
      addNewApplication(personId, licenseClassId),
    onSuccess: onSuccess,
  });

  return { isCreating, CreateApplication };
}
