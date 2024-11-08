import { useQuery } from "@tanstack/react-query";
import {
  detainedLicensedetailTypes,
  detainedLicensesKeys,
} from "./detainedLicensesKeys";
import { getDatainedLicense } from "../../Core/Services/ApiDatainedLicenses";

export default function useDetainedLicense(
  identifier,
  type = detainedLicensedetailTypes.ID,
  retry = 3,
) {
  const {
    isLoading,
    error,
    data: detainedLicense,
  } = useQuery({
    queryKey: detainedLicensesKeys.detail(type, identifier),
    queryFn: () => getDatainedLicense(identifier, type),
    enabled: !!identifier,
    retry: retry,
  });

  return { isLoading, error, detainedLicense };
}
