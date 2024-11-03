import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import AppLayout from "../ui/AppLayout";
import DetainedLicenses from "../Pages/DetainedLicenses";
import peopleRoutes from "./peopleRoutes";
import usersRoutes from "./usersRoutes";
import driversRoutes from "./driversRoutes";
import ApplicationTypesRoutes from "./applicationTypesRoutes";
import testTypesRoutes from "./testTypesRoutes";
import ApplicationRoutes from "./applicationRoutes";
import LicensesHistory from "../../Feasures/License/LicensesHistory";
import internationalLicensesRoutes from "./internationalLicensesRoutes";
import detainLicensesRoutes from "./DetainLicensesRoutes";
import licensesRoutes from "./licensesRoutes";

function Router() {
  const routes = {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      ApplicationRoutes,
      {
        path: "licenses-history/:id",
        element: <LicensesHistory />,
      },
      licensesRoutes,
      internationalLicensesRoutes,
      ApplicationTypesRoutes,
      testTypesRoutes,
      detainLicensesRoutes,
      peopleRoutes,
      usersRoutes,
      driversRoutes,
    ],
  };
  return useRoutes([routes]);
}

export default Router;
