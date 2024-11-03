import TestTypes from "../Pages/TestTypes";

const testTypesRoutes = {
  path: "test-types",
  children: [
    {
      index: true,
      element: <TestTypes />,
    },
  ],
};

export default testTypesRoutes;
