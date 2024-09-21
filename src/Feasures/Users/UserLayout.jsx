import { Outlet } from "react-router-dom";
import Main from "../../GlobalUI/Main";
import UserSidebar from "./UserSidebar";
import Layout from "../../GlobalUI/Layout";

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
