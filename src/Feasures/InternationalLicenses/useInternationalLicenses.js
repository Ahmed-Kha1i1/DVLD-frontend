import { useQuery } from "@tanstack/react-query";
import { getInternationalLicenses } from "../../Core/Services/ApiInternationalLicenses";
import { internationalLicensesQuery } from "../../Constants";

export default function useInternationalLicenses() {
  const {
    isLoading,
    error,
    data: InternationalLicenses,
  } = useQuery({
    queryKey: [internationalLicensesQuery],
    queryFn: getInternationalLicenses,
  });

  return { isLoading, error, InternationalLicenses };
}
