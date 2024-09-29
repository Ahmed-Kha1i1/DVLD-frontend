import { Outlet } from "react-router-dom";
import PersonSidebar from "./PersonSidebar";
import Main from "../../Core/ui/Main";
import Layout from "../../Core/ui/Layout";
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
