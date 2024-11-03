import LicenseDetails from "../Pages/LicenseDetails";
import RenewLicense from "../Pages/RenewLicense";
import ReplaceLicense from "../Pages/ReplaceLicense";

const licensesRoutes = {
  path: "licenses",
  children: [
    {
      path: ":id",
      element: <LicenseDetails />,
    },
    {
      path: "renew",
      element: <RenewLicense />,
    },
    {
      path: "replace",
      element: <ReplaceLicense />,
    },
  ],
};

export default licensesRoutes;
