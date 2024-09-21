import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="basis-full px-16 py-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
