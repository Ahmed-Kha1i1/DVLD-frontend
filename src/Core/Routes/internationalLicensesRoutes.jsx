import AddNewInternationalLicense from "../Pages/AddNewInternationalLicense";
import InternationalLicenses from "../Pages/InternationalLicenses";
import InternationalLicenseDetails from "../Pages/InternationalLicenseDetails";
const internationalLicensesRoutes = {
  path: "international-licenses",
  children: [
    {
      index: true,
      element: <InternationalLicenses />,
    },
    {
      path: "add-new",
      element: <AddNewInternationalLicense />,
    },
    {
      path: ":id",
      element: <InternationalLicenseDetails />,
    },
  ],
};
export default internationalLicensesRoutes;
