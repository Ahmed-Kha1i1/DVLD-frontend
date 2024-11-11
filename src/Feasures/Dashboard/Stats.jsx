/* eslint-disable react/prop-types */
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../Core/Utils/FormatUtils";
import Stat from "./Stat";

function Stats({ statistics }) {
  return (
    <div className="grid grid-cols-4 gap-10 xl:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] md:gap-4">
      <Stat
        title="Applications"
        color="bg-blue-100"
        icon={<HiOutlineBriefcase className="text-blue-700" />}
        value={statistics.numberOfApplications}
      />
      <Stat
        title="Applications Fees"
        color="bg-green-100"
        icon={<HiOutlineBanknotes className="text-green-700" />}
        value={formatCurrency(statistics.allPaidFees)}
      />
      <Stat
        title="Licenses"
        color="bg-indigo-100"
        icon={<HiOutlineCalendarDays className="text-indigo-700" />}
        value={statistics.numberOfLicenses}
      />
      <Stat
        title="Detained Licenses"
        color="bg-yellow-100"
        icon={<HiOutlineChartBar className="text-yellow-700" />}
        value={statistics.numberOfDetainedLicenses}
      />
    </div>
  );
}

export default Stats;
