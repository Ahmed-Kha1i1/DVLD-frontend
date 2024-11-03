import { useQuery } from "@tanstack/react-query";
import { getAllLicnseClasses } from "../../Core/Services/ApiLicenseClasses";
import { licenseClassesKeys } from "./licenseClassesKeys";
export default function useDrivers() {
  const {
    isLoading,
    error,
    data: licenseClasses,
  } = useQuery({
    queryKey: licenseClassesKeys.lists(),
    queryFn: getAllLicnseClasses,
  });

  return { isLoading, error, licenseClasses };
}
