import ApplicationLayout from "../../Feasures/Applications/ApplicationLayout";
import ApplicationDetails from "../Pages/ApplicationDetails";
import Applications from "../Pages/Applications";
import DeleteApplication from "../Pages/DeleteApplication";
import EditLocalApplication from "../Pages/EditLocalApplication";
import CancelApplication from "../Pages/CancelApplication";
import IssueLicense from "../Pages/IssueLicense";
import AddNewLocalApplication from "../Pages/AddNewLocalApplication";
import ListTestAppointments from "../../Feasures/TestAppointments/ListTestAppointments";
import { testTypes } from "../../Constants";

const ApplicationRoutes = {
  path: "applications",
  children: [
    {
      index: true,
      element: <Applications />,
    },
    {
      path: "add-new",
      element: <AddNewLocalApplication />,
    },
    {
      path: ":id/sechdule-vision",
      element: <ListTestAppointments testTypeId={testTypes.vision} />,
    },
    {
      path: ":id/sechdule-written",
      element: <ListTestAppointments testTypeId={testTypes.Written} />,
    },
    {
      path: ":id/sechdule-street",
      element: <ListTestAppointments testTypeId={testTypes.Street} />,
    },
    {
      element: <ApplicationLayout />,
      children: [
        {
          path: ":id",
          children: [
            { path: "details", element: <ApplicationDetails /> },
            { path: "edit", element: <EditLocalApplication /> },
            { path: "delete", element: <DeleteApplication /> },
            { path: "cancel", element: <CancelApplication /> },
            { path: "issue", element: <IssueLicense /> },
          ],
        },
      ],
    },
  ],
};

export default ApplicationRoutes;
