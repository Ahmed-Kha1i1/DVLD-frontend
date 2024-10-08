import { Navigate, useRoutes } from "react-router-dom";
import Applications from "../Pages/Applications";
import Dashboard from "../Pages/Dashboard";
import AppLayout from "../ui/AppLayout";
import ApplicationDetails from "../Pages/ApplicationDetails";
import InternationalLicenses from "../Pages/InternationalLicenses";
import ApplicationTypes from "../Pages/ApplicationTypes";
import TestTypes from "../Pages/TestTypes";
import DetainedLicenses from "../Pages/DetainedLicenses";
import peopleRoutes from "./peopleRoutes";
import usersRoutes from "./usersRoutes";
import driversRoutes from "./driversRoutes";

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
      {
        path: "applications",
        element: <Applications />,
      },
      {
        path: "applications/:id",
        element: <ApplicationDetails />,
      },
      {
        path: "international-licenses",
        element: <InternationalLicenses />,
      },
      {
        path: "application-types",
        element: <ApplicationTypes />,
      },
      {
        path: "test-types",
        element: <TestTypes />,
      },
      {
        path: "detained-licenses",
        element: <DetainedLicenses />,
      },
      peopleRoutes,
      usersRoutes,
      driversRoutes,
    ],
  };
  return useRoutes([routes]);
}

export default Router;
