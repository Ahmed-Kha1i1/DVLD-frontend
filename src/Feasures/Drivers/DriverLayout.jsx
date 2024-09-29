import { Outlet } from "react-router-dom";
import Main from "../../Core/ui/Main";
import Layout from "../../Core/ui/Layout";
import DriverSidebar from "./DriverSidebar";

function DriverLayout() {
  return (
    <Layout>
      <DriverSidebar />
      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
}

export default DriverLayout;
