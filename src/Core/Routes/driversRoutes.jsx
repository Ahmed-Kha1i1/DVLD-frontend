import Drivers from "../Pages/Drivers";
import DriverDetails from "../Pages/DriverDetails";
import EditDriverPerson from "../Pages/EditDriverPerson";
import DriverLayout from "../../Feasures/Drivers/DriverLayout";
import EditDriverContacts from "../Pages/EditDriverContacts";
import DriverLicensesHistory from "../Pages/DriverLicensesHistory";
import EmptyEmail from "./EmptyEmail";

const driverRoutes = {
  path: "drivers",
  children: [
    {
      index: true,
      element: <Drivers />,
    },
    {
      element: <DriverLayout />,
      children: [
        {
          path: ":id",
          children: [
            {
              path: "profile",
              element: <DriverDetails />,
            },
            {
              path: "edit",
              element: <EditDriverPerson />,
            },
            {
              path: "edit-contact",
              element: <EditDriverContacts />,
            },
            {
              path: "licenses-history",
              element: <DriverLicensesHistory />,
            },
            {
              path: "send-email",
              element: <EmptyEmail />,
            },
            {
              path: "delete",
              element: <DriverDetails />,
            },
          ],
        },
      ],
    },
  ],
};

export default driverRoutes;
