import { useQuery } from "@tanstack/react-query";
import { getDatainedLicenses } from "../../Core/Services/ApiDatainedLicenses";
import { detainedLicensesQuery } from "../../Constants";

export default function useDetainedLicenses() {
  const {
    isLoading,
    error,
    data: DetainedLicenses,
  } = useQuery({
    queryKey: [detainedLicensesQuery],
    queryFn: getDatainedLicenses,
  });

  return { isLoading, error, DetainedLicenses };
}
