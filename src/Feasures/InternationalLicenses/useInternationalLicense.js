import { useQuery } from "@tanstack/react-query";
import { getInternationalLicense } from "../../Core/Services/ApiInternationalLicenses";
import {
  internationalLicensesKeys,
  internationalLicensedetailTypes,
} from "./internationalLicensesKeys";
export default function useInternationalLicense(id, retry = 3) {
  const {
    isLoading,
    error,
    data: internationalLicense,
  } = useQuery({
    queryKey: internationalLicensesKeys.detail(
      internationalLicensedetailTypes.ID,
      id,
    ),
    queryFn: () => getInternationalLicense(id),
    enabled: !!id,
    retry: retry,
  });

  return { isLoading, error, internationalLicense };
}
