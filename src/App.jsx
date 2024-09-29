import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Core/Pages/Dashboard";
import AppLayout from "./Core/ui/AppLayout";
import PageNotFount from "./Core/ui/PageNotFount";
import Applications from "./Core/Pages/Applications";
import ApplicationDetails from "./Core/Pages/ApplicationDetails";
import InternationalLicenses from "./Core/Pages/InternationalLicenses";
import ApplicationTypes from "./Core/Pages/ApplicationTypes";
import TestTypes from "./Core/Pages/TestTypes";
import DetainedLicenses from "./Core/Pages/DetainedLicenses";
import People from "./Core/Pages/People";
import Users from "./Core/Pages/Users";
import Drivers from "./Core/Pages/Drivers";
import PersonDetails from "./Core/Pages/PersonDetails";
import PersonLayout from "./Feasures/People/PersonLayout";
import UserDetails from "./Core/Pages/UserDetails";
import UserLayout from "./Feasures/Users/UserLayout";
import DriverLayout from "./Feasures/Drivers/DriverLayout";
import DriverDetails from "./Core/Pages/DriverDetails";
import DeletePerson from "./Core/Pages/DeletePerson";
import DeleteUser from "./Core/Pages/DeleteUser";
import DriverLicenses from "./Core/Pages/DriverLicenses";
import DriverInternationalLicenses from "./Core/Pages/DriverInternationalLicenses";
import AddNewPerson from "./Core/Pages/AddNewPerson";
import EditPerson from "./Core/Pages/EditPerson";
import EditContacts from "./Core/Pages/EditContacts";
import AddNewUser from "./Core/Pages/AddNewUser";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="applications" element={<Applications />} />
            <Route path="applications/:id" element={<ApplicationDetails />} />
            <Route
              path="international-licenses"
              element={<InternationalLicenses />}
            />
            <Route path="application-types" element={<ApplicationTypes />} />
            <Route path="test-types" element={<TestTypes />} />
            <Route path="detained-licenses" element={<DetainedLicenses />} />

            <Route path="people">
              <Route index element={<People />} />
              <Route path="add-new" element={<AddNewPerson />} />
              <Route element={<PersonLayout />}>
                <Route path=":id">
                  <Route path="profile" element={<PersonDetails />} />
                  <Route path="edit" element={<EditPerson />} />
                  <Route path="edit-contact" element={<EditContacts />} />
                  <Route path="send-email" element={<PersonDetails />} />
                  <Route path="delete" element={<DeletePerson />} />
                </Route>
              </Route>
            </Route>

            <Route path="users">
              <Route index element={<Users />} />
              <Route path="add-new" element={<AddNewUser />} />
              <Route element={<UserLayout />}>
                <Route path=":id">
                  <Route path="profile" element={<UserDetails />} />
                  <Route path="edit" element={<UserDetails />} />
                  <Route path="edit-contact" element={<EditContacts />} />
                  <Route path="edit-user" element={<UserDetails />} />
                  <Route path="send-email" element={<UserDetails />} />
                  <Route path="delete" element={<DeleteUser />} />
                </Route>
              </Route>
            </Route>

            <Route path="drivers">
              <Route index element={<Drivers />} />
              <Route element={<DriverLayout />}>
                <Route path=":id">
                  <Route path="profile" element={<DriverDetails />} />
                  <Route path="edit" element={<DriverDetails />} />
                  <Route path="edit-contact" element={<EditContacts />} />
                  <Route path="local-licenses" element={<DriverLicenses />} />
                  <Route
                    path="international-licenses"
                    element={<DriverInternationalLicenses />}
                  />
                  <Route path="send-email" element={<DriverDetails />} />
                  <Route path="delete" element={<DriverDetails />} />
                </Route>
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={8}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          duration: 5000,
          style: {
            background: "white",
            color: "black",
          },
          success: {
            duration: 5000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
