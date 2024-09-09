import Logo from "./Logo";
import Search from "./Search";
import UserInfo from "./UserInfo";

function UserBar() {
  return (
    <div className="flex items-center justify-between py-4 border-Lightgray border-b">
      <Logo className="text-center" />
      <Search />
      <UserInfo />
    </div>
  );
}

export default UserBar;
