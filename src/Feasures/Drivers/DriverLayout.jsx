import { Outlet } from "react-router-dom";
import Main from "../../GlobalUI/Main";
import Layout from "../../GlobalUI/Layout";
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
