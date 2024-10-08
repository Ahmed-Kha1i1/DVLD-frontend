import Users from "../Pages/Users";
import AddNewUser from "../Pages/AddNewUser";
import UserDetails from "../Pages/UserDetails";
import DeleteUser from "../Pages/DeleteUser";
import UserLayout from "../../Feasures/Users/UserLayout";
import EditUser from "../Pages/EditUser";
import EditUserPerson from "../Pages/EditUserPerson";
import EditUserContacts from "../Pages/EditUserContacts";
import ChangePassword from "../Pages/ChangePassword";

const usersRoutes = {
  path: "users",
  children: [
    {
      index: true,
      element: <Users />,
    },
    {
      path: "add-new",
      element: <AddNewUser />,
    },
    {
      element: <UserLayout />,
      children: [
        {
          path: ":id",
          children: [
            {
              path: "profile",
              element: <UserDetails />,
            },
            {
              path: "edit",
              element: <EditUserPerson />,
            },
            {
              path: "edit-contact",
              element: <EditUserContacts />,
            },
            {
              path: "edit-user",
              element: <EditUser />,
            },
            {
              path: "send-email",
              element: <UserDetails />,
            },
            {
              path: "delete",
              element: <DeleteUser />,
            },
            {
              path: "change-password",
              element: <ChangePassword />,
            },
          ],
        },
      ],
    },
  ],
};

export default usersRoutes;
