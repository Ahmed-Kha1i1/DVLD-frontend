/* eslint-disable react/prop-types */
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function preparChartData(statistics) {
  return [
    {
      type: "Completed",
      number: statistics.numberOfCompletedApplications,
      color: "#22c55e",
    },
    {
      type: "Cancelled",
      number: statistics.numberOfCancelledApplications,
      color: "#ef4444",
    },
    {
      type: "New",
      number: statistics.numberOfNewApplications,
      color: "#4f65df",
    },
  ];
}
function ApplicationsChart({ statistics }) {
  const data = preparChartData(statistics);
  return (
    <div className="rounded-md border bg-white p-6">
      <h4 className="">Applications summary</h4>
      <ResponsiveContainer width="100%" height={300} className="mt-10">
        <PieChart>
          <Pie
            data={data}
            nameKey="type"
            dataKey="number"
            innerRadius={85}
            outerRadius={110}
            cx="50%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.type} />
            ))}
          </Pie>
          <Tooltip />
          <Legend iconSize={15} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ApplicationsChart;
