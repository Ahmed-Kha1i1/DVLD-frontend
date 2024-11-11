import { Link } from "react-router-dom";
import Logo from "./Logo";

import UserInfo from "./UserInfo";

function UserBar() {
  return (
    <div className="flex items-center justify-between border-b border-Lightgray px-16 py-4 md:px-4 xs:block">
      <Link to="/dashboard">
        <Logo />
      </Link>
      <UserInfo />
    </div>
  );
}

export default UserBar;
