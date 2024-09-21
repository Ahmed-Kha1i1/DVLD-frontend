import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AppLayout from "./GlobalUI/AppLayout";
import PageNotFount from "./GlobalUI/PageNotFount";
import Applications from "./Pages/Applications";
import ApplicationDetails from "./Pages/ApplicationDetails";
import InternationalLicenses from "./Pages/InternationalLicenses";
import ApplicationTypes from "./Pages/ApplicationTypes";
import TestTypes from "./Pages/TestTypes";
import DetainedLicenses from "./Pages/DetainedLicenses";
import People from "./Pages/People";
import Users from "./Pages/Users";
import Drivers from "./Pages/Drivers";
import PersonDetails from "./Pages/PersonDetails";
import PersonLayout from "./Feasures/People/PersonLayout";
import UserDetails from "./Pages/UserDetails";
import UserLayout from "./Feasures/Users/UserLayout";
import DriverLayout from "./Feasures/Drivers/DriverLayout";
import DriverDetails from "./Pages/DriverDetails";
import DeletePerson from "./Pages/DeletePerson";
import { Toaster } from "react-hot-toast";
import DeleteUser from "./Pages/DeleteUser";
import DriverLicenses from "./Pages/DriverLicenses";
import DriverInternationalLicenses from "./Pages/DriverInternationalLicenses";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
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
              <Route element={<PersonLayout />}>
                <Route path=":id">
                  <Route path="profile" element={<PersonDetails />} />
                  <Route path="edit" element={<PersonDetails />} />
                  <Route path="edit-contact" element={<PersonDetails />} />
                  <Route path="send-email" element={<PersonDetails />} />
                  <Route path="delete" element={<DeletePerson />} />
                </Route>
              </Route>
            </Route>

            <Route path="users">
              <Route index element={<Users />} />
              <Route element={<UserLayout />}>
                <Route path=":id">
                  <Route path="profile" element={<UserDetails />} />
                  <Route path="edit" element={<UserDetails />} />
                  <Route path="edit-contact" element={<UserDetails />} />
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
                  <Route path="edit-contact" element={<DriverDetails />} />
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
            duration: 3000,
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
