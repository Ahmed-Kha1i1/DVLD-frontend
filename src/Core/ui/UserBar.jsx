import Logo from "./Logo";
import Search from "./Search";
import UserInfo from "./UserInfo";

function UserBar() {
  return (
    <div className="flex items-center justify-between border-b border-Lightgray px-16 py-4">
      <Logo className="text-center" />
      <Search />
      <UserInfo />
    </div>
  );
}

export default UserBar;
