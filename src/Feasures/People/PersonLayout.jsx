import { Outlet } from "react-router-dom";
import PersonSidebar from "./PersonSidebar";
import Main from "../../GlobalUI/Main";
import Layout from "../../GlobalUI/Layout";
function PersonLayout() {
  return (
    <Layout>
      <PersonSidebar />
      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
}

export default PersonLayout;
