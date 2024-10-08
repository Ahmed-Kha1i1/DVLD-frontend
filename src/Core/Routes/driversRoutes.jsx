import Drivers from "../Pages/Drivers";
import DriverDetails from "../Pages/DriverDetails";
import EditContacts from "../Pages/EditContacts";
import DriverLicenses from "../Pages/DriverLicenses";
import DriverInternationalLicenses from "../Pages/DriverInternationalLicenses";
import DriverLayout from "../../Feasures/Drivers/DriverLayout";

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
              element: <DriverDetails />,
            },
            {
              path: "edit-contact",
              element: <EditContacts />,
            },
            {
              path: "local-licenses",
              element: <DriverLicenses />,
            },
            {
              path: "international-licenses",
              element: <DriverInternationalLicenses />,
            },
            {
              path: "send-email",
              element: <DriverDetails />,
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
