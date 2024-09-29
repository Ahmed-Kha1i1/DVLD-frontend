import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../Services/ApiCountries";
import { CountriesQuery } from "../../Constants";

export default function useCountries() {
  const {
    isLoading,
    error,
    data: Countries,
  } = useQuery({
    queryKey: [CountriesQuery],
    queryFn: getCountries,
  });

  return { isLoading, error, Countries };
}
