import { useQuery } from "@tanstack/react-query";
import { GetActiveLicenseId } from "../../Core/Services/ApiApplications";
import { applicationsKeys } from "./applicationsKeys";

export default function useActiveLicenseId(
  localApplicationId,
  isCompleted = true,
) {
  const {
    isLoading,
    error,
    data: LicenseId,
  } = useQuery({
    queryKey: applicationsKeys.ActiveLicenseId(localApplicationId),
    queryFn: () => GetActiveLicenseId(localApplicationId),
    enabled: isCompleted && !!localApplicationId,
    retry: 0,
  });

  return { isLoading, error, LicenseId };
}
