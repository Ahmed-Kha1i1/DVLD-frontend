import Logo from "./Logo";

import UserInfo from "./UserInfo";

function UserBar() {
  return (
    <div className="flex items-center justify-between border-b border-Lightgray px-16 py-4 xs:block md:px-4">
      <Logo />

      <UserInfo />
    </div>
  );
}

export default UserBar;
