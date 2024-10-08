import { useQuery } from "@tanstack/react-query";
import { getDatainedLicenses } from "../../Core/Services/ApiDatainedLicenses";
import { detainedLicensesKeys } from "./detainedLicensesKeys";

export default function useDetainedLicenses() {
  const {
    isLoading,
    error,
    data: DetainedLicenses,
  } = useQuery({
    queryKey: detainedLicensesKeys.lists(),
    queryFn: getDatainedLicenses,
  });

  return { isLoading, error, DetainedLicenses };
}
