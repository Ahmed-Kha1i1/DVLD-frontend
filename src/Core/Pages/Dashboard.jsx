/* eslint-disable react/prop-types */
import DashboardFilter from "../../Feasures/Dashboard/DashboardFilter";
import DashboardLayout from "../../Feasures/Dashboard/DashboardLayout";
import PageTitle from "../ui/PageTitle";
function Dashboard() {
  return (
    <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr]">
      <div className="mb-4 flex items-start justify-between sm:flex-col">
        <PageTitle title="Dashboard" withLine={false} />
        <DashboardFilter />
      </div>
      <DashboardLayout />
    </div>
  );
}

export default Dashboard;
