import { useQuery } from "@tanstack/react-query";
import { getInternationalLicenses } from "../../Core/Services/ApiInternationalLicenses";
import { internationalLicensesKeys } from "./internationalLicensesKeys";

export default function useInternationalLicenses() {
  const {
    isLoading,
    error,
    data: InternationalLicenses,
  } = useQuery({
    queryKey: internationalLicensesKeys.lists(),
    queryFn: getInternationalLicenses,
  });

  return { isLoading, error, InternationalLicenses };
}
