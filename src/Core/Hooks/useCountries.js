import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../Services/ApiCountries";

export default function useCountries() {
  const {
    isLoading,
    error,
    data: Countries,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  return { isLoading, error, Countries };
}
