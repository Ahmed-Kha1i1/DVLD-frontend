import PersonLayout from "../../Feasures/People/PersonLayout";
import AddNewPerson from "../Pages/AddNewPerson";
import DeletePerson from "../Pages/DeletePerson";
import EditContacts from "../Pages/EditContacts";
import EditPerson from "../Pages/EditPerson";
import People from "../Pages/People";
import PersonDetails from "../Pages/PersonDetails";

const peopleRoutes = {
  path: "people",
  children: [
    {
      index: true,
      element: <People />,
    },
    {
      path: "add-new",
      element: <AddNewPerson />,
    },
    {
      element: <PersonLayout />,
      children: [
        {
          path: ":id",
          children: [
            {
              path: "profile",
              element: <PersonDetails />,
            },
            {
              path: "edit",
              element: <EditPerson />,
            },
            {
              path: "edit-contact",
              element: <EditContacts />,
            },
            {
              path: "send-email",
              element: <PersonDetails />,
            },
            {
              path: "delete",
              element: <DeletePerson />,
            },
          ],
        },
      ],
    },
  ],
};

export default peopleRoutes;
