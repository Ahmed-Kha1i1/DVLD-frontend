/* eslint-disable react/prop-types */
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function generatePastDates(numDays) {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < numDays; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dates.push(date.toISOString().split("T")[0]); // Format as "YYYY-MM-DD"
  }
  return dates.reverse();
}

function DetainedLicenesChart({
  detainedLicenses,
  startDate,
  endDate,
  numDays,
}) {
  const allDates = generatePastDates(numDays);

  const chartData = allDates.map((date) => {
    const newDetainedLicense = detainedLicenses.find(
      (item) => item.detainDate === date,
    );

    return {
      detainDate: date,
      numberofDetainedLicenes: newDetainedLicense
        ? newDetainedLicense.numberofDetainedLicenes
        : 0,
    };
  });

  return (
    <div className="flex flex-col justify-between rounded-md border bg-white p-6">
      <h4 className="">
        Detained licenes from {startDate} &mdash; {endDate}
      </h4>

      <ResponsiveContainer height={350} width="100%">
        <AreaChart data={chartData}>
          <XAxis dataKey="detainDate" tick="red" tickLine="red" />
          <YAxis tick="red" tickLine="red" />
          <Tooltip contentStyle={{ backgroundColor: "white" }} />
          <CartesianGrid strokeDasharray="3" />
          <Area
            dataKey="numberofDetainedLicenes"
            type="monotone"
            stroke="#4F65DF"
            fill="#4F89DF"
            strokeWidth={2}
            name="Fees"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DetainedLicenesChart;
