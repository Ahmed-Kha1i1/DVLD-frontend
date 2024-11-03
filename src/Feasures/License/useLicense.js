import { useQuery } from "@tanstack/react-query";
import { getLicense } from "../../Core/Services/ApiLicenses";
import { licensesKeys, licensedetailTypes } from "./licensesKeys";
export default function useLicense(id, retry = 3) {
  const {
    isLoading,
    error,
    data: License,
  } = useQuery({
    queryKey: licensesKeys.detail(licensedetailTypes.ID, id),
    queryFn: () => getLicense(id),
    enabled: !!id,
    retry: retry,
  });

  return { isLoading, error, License };
}
