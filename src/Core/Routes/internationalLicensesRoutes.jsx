import AddNewInternationalLicense from "../Pages/AddNewInternationalLicense";
import InternationalLicenses from "../Pages/InternationalLicenses";

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
  ],
};
export default internationalLicensesRoutes;
