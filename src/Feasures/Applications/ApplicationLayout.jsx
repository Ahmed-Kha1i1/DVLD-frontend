import { Outlet } from "react-router-dom";
import Layout from "../../Core/ui/Layout";
import Main from "../../Core/ui/Main";
import ApplicationSidebar from "./ApplicationSidebar";

function ApplicationLayout() {
  return (
    <Layout>
      <ApplicationSidebar />
      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
}

export default ApplicationLayout;
