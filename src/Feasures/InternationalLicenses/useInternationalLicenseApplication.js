import { useQuery } from "@tanstack/react-query";
import { getInternationalLicenseApplication } from "../../Core/Services/ApiInternationalLicenses";
import {
  internationalLicensesKeys,
  internationalLicensedetailTypes,
} from "./internationalLicensesKeys";
export default function useInternationalLicenseApplication(id, retry = 3) {
  const {
    isLoading,
    error,
    data: internationalLicenseApplication,
  } = useQuery({
    queryKey: internationalLicensesKeys.application(
      internationalLicensedetailTypes.id,
      id,
    ),
    queryFn: () => getInternationalLicenseApplication(id),
    enabled: !!id,
    retry: retry,
  });

  return { isLoading, error, internationalLicenseApplication };
}
