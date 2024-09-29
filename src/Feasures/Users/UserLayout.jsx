import { Outlet } from "react-router-dom";
import Main from "../../Core/ui/Main";
import UserSidebar from "./UserSidebar";
import Layout from "../../Core/ui/Layout";

function UserLayout() {
  return (
    <Layout>
      <UserSidebar />
      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
}

export default UserLayout;
