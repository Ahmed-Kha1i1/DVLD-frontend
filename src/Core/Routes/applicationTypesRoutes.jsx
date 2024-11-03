import ApplicationTypes from "../Pages/ApplicationTypes";

const ApplicationTypesRoutes = {
  path: "application-types",
  children: [
    {
      index: true,
      element: <ApplicationTypes />,
    },
  ],
};

export default ApplicationTypesRoutes;
