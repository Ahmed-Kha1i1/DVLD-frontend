import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="px-16 py-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
