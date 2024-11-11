import { useSearchParams } from "react-router-dom";

function useDateRang() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const endDateSt = new Date().toLocaleDateString();
  let startDate = new Date();
  startDate.setDate(startDate.getDate() - numDays);

  const startDateSt = startDate.toLocaleDateString();

  return { startDate: startDateSt, endDate: endDateSt, numDays };
}

export default useDateRang;
