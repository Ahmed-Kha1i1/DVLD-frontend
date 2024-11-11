import Error from "../../Core/ui/Error";
import Spinner from "../../Core/ui/Spinner";
import Stats from "./Stats";
import useStatistics from "./useStatistics";
import useDetainedLicensesStats from "../DetainedLicenses/useDetainedLicensesStats";
import useDateRang from "./useDateRang";
import DetainedLicenesChart from "./DetainedLicenesChart";
import ApplicationsChart from "./ApplicationsChart";

function DashboardLayout() {
  const { numDays, startDate, endDate } = useDateRang();

  const { isLoading, error, statistics } = useStatistics(startDate, endDate);
  const {
    isLoading: isLoading1,
    error: error1,
    detainedLicenses,
  } = useDetainedLicensesStats(startDate, endDate);
  if (isLoading || isLoading1) return <Spinner />;

  if (error || error1)
    return <Error message={error ? error?.message : error1?.message} />;

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr]">
      <Stats statistics={statistics} />
      <div className="mt-10 grid grid-cols-[3fr_1fr] gap-5 xl:grid-cols-1">
        <DetainedLicenesChart
          detainedLicenses={detainedLicenses}
          startDate={startDate}
          endDate={endDate}
          numDays={numDays}
        />
        <ApplicationsChart statistics={statistics} />
      </div>
    </div>
  );
}

export default DashboardLayout;
