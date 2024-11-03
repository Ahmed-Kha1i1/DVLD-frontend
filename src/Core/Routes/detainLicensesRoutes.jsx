import DetainedLicenses from "../Pages/DetainedLicenses";
import DetainLicense from "../Pages/DetainLicense";
import ReleaseLicense from "../Pages/ReleaseLicense";

const detainLicensesRoutes = {
  path: "detained-licenses",
  children: [
    {
      index: true,
      element: <DetainedLicenses />,
    },
    {
      path: "detain",
      element: <DetainLicense />,
    },
    {
      path: "release",
      element: <ReleaseLicense />,
    },
  ],
};

export default detainLicensesRoutes;
